from flask import Flask
from flask_sslify import SSLify


app = Flask(__name__)
sslify = SSLify(app)


@app.route('/', methods=['POST', 'GET'])
def index():
	with open('index.html', 'r') as file:
		return file.read()


if __name__ == '__main__':
	app.run()
