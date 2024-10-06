import pandas as pd
from sqlalchemy import create_engine

# Load the CSV file into a DataFrame
csv_file_path = 'greenhouse_gas_inventory_data_data.csv'  # Replace with your file path
df = pd.read_csv( "C:\\Users\Bhavin Umatiya\\PycharmProjects\\nasa3\\greenhouse_gas_inventory_data_data.csv")

# Create an SQLite engine (or use another database engine, e.g., PostgreSQL)
engine = create_engine('sqlite:///your_database.db')  # This will create the database file

# Write the DataFrame to SQL (replace 'table_name' with your desired table name)
df.to_sql('table_name', con=engine, if_exists='replace', index=False)

print("Data has been successfully written to the SQL database!")
