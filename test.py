from flask import Flask, render_template
from flask import request

app = Flask(__name__)

@app.route('/', methods=['GET,POST']) #API, Flask
def index():
    return "<h1>asd</h1>"

if __name__ == '__main__': 
	app.run()

"""    #JS
url - localhost

async function getUsers() {
        let body = {
            "type":"getUsers",
            "user":user}
        const response = await fetch(url, {
            method:"POST",
            body: JSON.stringify(body)
        })
        let info = await response.json();
        console.log(info)
    }
"""