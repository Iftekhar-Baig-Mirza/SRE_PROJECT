from flask import Flask, request, render_template, jsonify
from flask_cors import cross_origin
import BangalorePricePrediction as tm
import csv;
app = Flask(__name__)

@app.route('/get_location_names', methods=['GET'])
def get_location_names():
    response = jsonify({
        'locations': tm.get_location_names()
    })
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route('/get_area_names', methods=['GET'])
def get_area_names():
    response = jsonify({
        'area': tm.get_area_values()
    })
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route('/get_availability_names', methods=['GET'])
def get_availability_names():
    response = jsonify({
        'availability': tm.get_availability_values()
    })
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response
@app.route('/get_predicted_price', methods=['POST'])
def get_pridicted_price():
    sqft = float(request.form['sqft'])
    bhk = int(request.form['bhk'])
    bath = int(request.form['bath'])
    loc = request.form.get('loc')
    area = request.form.get('area')
    availability = request.form.get('avail')
    response = jsonify({
        'prediction': round(float(tm.predict_house_price(loc, area, availability, sqft, bhk, bath)), 2)
    })
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response
@app.route('/get_sites',methods=['GET'])
def get_all_sites():
    args = request.args
    data = tm.getsites(int(args.get("page")),int(args.get('size')))
    response = jsonify({
        'data': data[0],
        'totalItems':data[1],
        'totalPages':data[2],
        'currentPage':data[3]
    })
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response
@app.route('/add_site', methods=['POST'])
def add_site():
    area_type = request.form['area_type']
    availability = request.form['availability']
    location = request.form['location']
    size = request.form['size']
    society = request.form['society']
    total_sqft = request.form['total_sqft']
    bath = request.form['bath']
    balcony = request.form['balcony']
    price = request.form['price']
    f = open('Bengaluru_House_Data.csv','a')
    writer = csv.writer(f)
    row=[area_type,availability,location,size,society,total_sqft,bath,balcony,price]
    writer.writerow([])
    writer.writerow(row)
    f.close()
    response = jsonify({
        'status': 200
    })
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response
@app.route("/")
@cross_origin()
def home():
    return render_template("home.html")


@app.route("/predict", methods=["GET", "POST"])
#@cross_origin()
def predict():
    if request.method == "POST":
        sqft = float(request.form['sqft'])
        bhk = int(request.form['bhk'])
        bath = int(request.form['bath'])
        loc = request.form.get('loc')
        area = request.form.get('area')
        availability = request.form.get('avail')

        prediction = round(float(tm.predict_house_price(loc, area, availability, sqft, bhk, bath)), 2)

        return render_template('home.html', prediction_text="The house price is Rs. {} lakhs".format(prediction))

    return render_template("home.html")


if __name__ == "__main__":
    tm.load_saved_attributes()
    app.run(debug = True)