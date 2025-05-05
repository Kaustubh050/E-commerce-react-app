from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector
import config

app = Flask(__name__)
CORS(app)  # Allow React to talk to Flask (cross-origin)

# Database connection
def get_db_connection():
    return mysql.connector.connect(
        host=config.MYSQL_HOST,
        user=config.MYSQL_USER,
        password=config.MYSQL_PASSWORD,
        database=config.MYSQL_DB
    )

# Signup API
@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')

    conn = get_db_connection()
    cursor = conn.cursor()

    # Check if user already exists
    cursor.execute("SELECT * FROM users WHERE email = %s", (email,))
    existing_user = cursor.fetchone()

    if existing_user:
        cursor.close()
        conn.close()
        return jsonify({'status': 'error', 'message': 'User already exists!'}), 400

    # Insert new user
    cursor.execute("INSERT INTO users (name, email, password) VALUES (%s, %s, %s)",
                   (name, email, password))
    conn.commit()

    cursor.close()
    conn.close()
    return jsonify({'status': 'success', 'message': 'User registered successfully!'})


# Login API
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    conn = get_db_connection()
    cursor = conn.cursor()

    cursor.execute("SELECT * FROM users WHERE email = %s AND password = %s", (email, password))
    user = cursor.fetchone()

    cursor.close()
    conn.close()

    if user:
        return jsonify({'status': 'success', 'message': 'Login successful!'})
    else:
        return jsonify({'status': 'error', 'message': 'Invalid email or password!'}), 401


if __name__ == '__main__':
    app.run(debug=True)
