import mysql.connector

# Function to insert data into the library table
def borrow(id, name, borrower):
    try:
        # Connect to the MySQL database
        connection = mysql.connector.connect(
            host="your_host",
            user="your_username",
            password="your_password",
            database="your_database"
        )

        if connection.is_connected():
            cursor = connection.cursor()

            # SQL query to insert data into the library table
            sql_query = "INSERT INTO library (id, name, borrower) VALUES (%s, %s, %s)"
            data = (id, name, borrower)

            cursor.execute(sql_query, data)
            connection.commit()

            return {"output":"Data inserted successfully!"}

    except mysql.connector.Error as e:
        return {"e":e}

    finally:
        if connection.is_connected():
            cursor.close()
            connection.close()
# Function to list all books in the library table
def waitlist():
    try:
        # Connect to the MySQL database
        connection = mysql.connector.connect(
            host="your_host",
            user="your_username",
            password="your_password",
            database="your_database"
        )

        if connection.is_connected():
            cursor = connection.cursor()

            # SQL query to retrieve all books in the library table
            sql_query = "SELECT * FROM library"
            cursor.execute(sql_query)

            books = cursor.fetchall()

            if books:
                print("Books in the Library:")
                for book in books:
                    id, name, borrower = book
                    print(f"ID: {id}, Name: {name}, Borrower: {borrower}")
            else:
                print("The library is empty.")

    except mysql.connector.Error as e:
        print(f"Error: {e}")

    finally:
        if connection.is_connected():
            cursor.close()
            connection.close()
