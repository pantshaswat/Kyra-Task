const express = require('express')
const bodyParser = require('body-parser')
const {Pool} = require('pg')
const cors = require('cors')
require('dotenv').config()

const app= express()
app.use(bodyParser.json())

const allowedOrigins = ['http://localhost:3000']
app.use(cors({
    origin: function(origin, callback){
        if(!origin) return callback(null, true);
        if(allowedOrigins.indexOf(origin) === -1){
        const msg = 'CORS blocks this site'
        return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}))

const pool = new Pool({
    user:process.env.DB_USER,
    host:process.env.DB_HOST,
    database:process.env.DB_NAME,
    password:process.env.DB_PASSWORD,
    port:process.env.DB_PORT
    })

app.post('/api/consent/delete', async(req,res) => {
    const {user_id, consent_type} = req.body
    if(!user_id || !consent_type){
        return res.status(400).json({error: 'Missing user_id or consent_type'})
    }
    try{
        await pool.query(`UPDATE user_consents SET status='withdrawn' , updated_at=NOW() WHERE user_id=$1 AND consent_type=$2`, [user_id, consent_type])
    await pool.query(`INSERT INTO audit_logs (user_id, action, consent_type) VALUES ($1, 'withdrawn_consent', $2)`, [user_id, consent_type])
        return res.json({message: 'Consent withdrawn successfully'});
    }
    catch(err){
        console.log("Error while updating consent", err)
    }
})


app.get("/api/users", async (req, res) => {
  const { email } = req.query;
  if (!email) return res.status(400).json({ error: "Email required" });

  try {
    const { rows: users } = await pool.query(
"SELECT * FROM users WHERE email=$1",
      [email]
    );
 if (users.length === 0) return res.status(404).json({ error: "User not found" })

const user = users[0]
const { rows: consents } = await pool.query(
      "SELECT consent_type, status, updated_at FROM user_consents WHERE user_id=$1",
      [user.id]
    );
res.json({ ...user, consents });
  } catch (err) {
    console.log("Error fetching user data", err);
  }
});


app.listen(5000, () => console.log("Backend running on http://localhost:5000"));
