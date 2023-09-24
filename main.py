from flask import Flask, render_template      
import apifunctions
app = Flask(__name__)
def p(n):
  return "Hello"+n
@app.route('/', methods=['GET', 'POST'])
def welcome():
    return render_template("index.html")  
@app.route('/api/borrow/<string:name>/<string:borrower>/<string:id>/')
def borrow(name,borrower,id):
    return apifunctions.borrow(name,borrower,id)
@app.route('/api/list/')
def list():
    return apifunctions.waitlist()

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000)