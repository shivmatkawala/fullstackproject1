from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
# from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column

app = Flask(__name__)
CORS(app)
app.config["SQLALCHEMY_DATABASE_URI"] = "mssql+pyodbc://@localhost/info?driver=ODBC+Driver+17+for+SQL+Server&trusted_connection=yes"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False


db = SQLAlchemy(app)
class Students(db.Model):
    __tablename__ = "Students"
    
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(20), nullable=False)
    school = db.Column(db.String(20), nullable=False)


@app.route('/addStudent', methods=['POST'])
def submit_data():
    data = request.json
    name = data.get('Name')
    school = data.get('School')
    
    new_student = Students(name=name, school=school)
    db.session.add(new_student)
    db.session.commit()
    
    return jsonify({'message': 'success'}), 201


@app.route('/getAllStudents', methods=['GET'])
def getAllStudents():
    students = Students.query.all()
    result = []
    
    for student in students:
        result.append({'id': student.id, 'Name': student.name, 'School': student.school})
    
    return jsonify(result)

@app.route('/updateStudent', methods=['PUT'])
def update_student():
    data = request.json
    result = []
    try:
        student_id = data.get('id') 
        if not student_id:
            return jsonify({'message': 'ID is required!'}), 400
        
        student = Students.query.get(student_id)
        if student:
            student.name = data.get('Name', student.name)
            student.school = data.get('School', student.school)
            db.session.commit()
            return jsonify('success')
        else:
            return jsonify({'message': 'Student not found!'}), 404
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500
    

@app.route('/addall', methods=['POST'])
def addall_data():
    data = request.json
    new_students = []
    
    for student in data:
        name = student.get('Name')
        school = student.get('School')
        
        new_student = Students(name=name, school=school)
        new_students.append(new_student)
        
    db.session.add_all(new_students)
    db.session.commit()
    return jsonify({'message': 'Data inserted successfully!'}), 201

@app.route('/deleteall', methods=['DELETE'])
def deleteall():
    try:
        db.session.query(Students).delete()
        db.session.commit()
        return jsonify({'message': 'success'}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500
    
    

@app.route('/destroy', methods=['DELETE'])
def destroy_data():
    student_id = request.args.get('id')  # Obtain the ID from query parameters
    
    if student_id is None:
        return jsonify({'message': 'No ID provided!'}), 400
    
    student = Students.query.get(student_id)
    
    if student:
        db.session.delete(student)
        db.session.commit()
        return jsonify({'message': 'success'}), 200
    else:
        return jsonify({'message': 'Student not found!'}), 404

if __name__ == '__main__':
     with app.app_context():
        db.create_all()
        app.run(debug=True)