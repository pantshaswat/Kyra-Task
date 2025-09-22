-- Patch tracking tables
CREATE TABLE dependencies (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    version VARCHAR(100) NOT NULL,
    type VARCHAR(50) NOT NULL, -- 'npm', 'pip', 'docker', etc.
    component VARCHAR(100) NOT NULL, -- 'backend', 'frontend', 'ai-service'
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE vulnerabilities (
    id SERIAL PRIMARY KEY,
    cve_id VARCHAR(50) UNIQUE NOT NULL,
    description TEXT,
    severity VARCHAR(20), -- 'LOW', 'MEDIUM', 'HIGH', 'CRITICAL'
    cvss_score DECIMAL(3,1),
    published_date TIMESTAMP,
    source VARCHAR(100), -- 'GitHub', 'OSV', 'OWASP', etc.
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE dependency_vulnerabilities (
    id SERIAL PRIMARY KEY,
    dependency_id INTEGER REFERENCES dependencies(id),
    vulnerability_id INTEGER REFERENCES vulnerabilities(id),
    affected_versions TEXT,
    fixed_version VARCHAR(100),
    status VARCHAR(50) DEFAULT 'open', -- 'open', 'patched', 'ignored'
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE patch_tracking (
    id SERIAL PRIMARY KEY,
    dependency_id INTEGER REFERENCES dependencies(id),
    current_version VARCHAR(100),
    available_version VARCHAR(100),
    patch_type VARCHAR(50), -- 'security', 'feature', 'bugfix'
    urgency VARCHAR(20), -- 'low', 'medium', 'high', 'critical'
    release_date TIMESTAMP,
    applied BOOLEAN DEFAULT FALSE,
    applied_date TIMESTAMP,
    notes TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);