# db_setup.py
import psycopg2
import hashlib

# Configuration for your PostgreSQL database
DB_CONFIG = {
    "dbname": "kyra",
    "user": "admin",
    "password": "admin",
    "host": "localhost",
    "port": "5432"
}

def setup_db():
    """Establishes a connection and creates the necessary test table."""
    try:
        conn = psycopg2.connect(**DB_CONFIG)
        cur = conn.cursor()
        
        # Create a test table for user data, if it doesn't exist
        cur.execute("""
            CREATE TABLE IF NOT EXISTS test_users (
                id SERIAL PRIMARY KEY,
                username VARCHAR(50) UNIQUE,
                password_hash TEXT
            );
        """)
        conn.commit()
        print("Database setup complete: 'test_users' table is ready.")
        return conn, cur
    except psycopg2.Error as e:
        print(f"ERROR: Could not connect to the database. Details: {e}")
        return None, None

def add_test_data(cur, test_user_data):
    """Inserts a list of test users with hashed passwords into the database."""
    try:
        for user_data in test_user_data:
            pwd = user_data['password']
            salt = b'salt_example'
            # Hash the password using a secure algorithm
            hashed = hashlib.pbkdf2_hmac('sha256', pwd.encode('utf-8'), salt, 100000).hex()
            
            # Insert the username and hashed password
            cur.execute(
                "INSERT INTO test_users (username, password_hash) VALUES (%s, %s) ON CONFLICT (username) DO NOTHING;",
                (user_data['username'], hashed)
            )
        cur.connection.commit()
        print("Test data added to 'test_users' table.")
        return True
    except psycopg2.Error as e:
        print(f"ERROR: Could not add test data. Details: {e}")
        return False

def get_test_data(cur):
    """Retrieves all data from the test_users table."""
    try:
        cur.execute("SELECT username, password_hash FROM test_users;")
        return cur.fetchall()
    except psycopg2.Error as e:
        print(f"✗ ERROR: Could not retrieve test data. Details: {e}")
        return []

def cleanup_db(conn, cur):
    """Closes the database connection and removes the test table."""
    if cur and conn:
        try:
            cur.execute("DROP TABLE IF EXISTS test_users;")
            conn.commit()
            print("Database cleanup complete: 'test_users' table dropped.")
        except psycopg2.Error as e:
            print(f"ERROR: Could not clean up the database. Details: {e}")
        finally:
            cur.close()
            conn.close()

if __name__ == '__main__':
    # This block allows you to test the functions independently
    conn, cur = setup_db()
    if conn and cur:
        test_data = [
            {'username': 'testuser1', 'password': 'pass1word'},
            {'username': 'testuser2', 'password': 'pass2word'}
        ]
        add_test_data(cur, test_data)
        users = get_test_data(cur)
        print("Retrieved users:", users)
        # cleanup_db(conn, cur)