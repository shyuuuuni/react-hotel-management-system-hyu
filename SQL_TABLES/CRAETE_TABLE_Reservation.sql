CREATE TABLE Reservation (
	ID INT AUTO_INCREMENT ,
	Room_Num INT NOT NULL,
	Hotel_ID INT NOT NULL,
	Customer_ID INT NOT NULL,
	Check_In DATETIME NOT NULL,
	Check_Out DATETIME NOT NULL,
	Adult INT NOT NULL,
	Child INT NOT NULL,
	Pay_Date DATETIME NOT NULL,
	Pay_Type VARCHAR(50) NOT NULL,
	Price_Won VARCHAR(50) NOT NULL,
	PRIMARY KEY(ID),
	FOREIGN KEY(Room_Num) REFERENCES Room(Room_Num) ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY(Hotel_ID) REFERENCES Hotel(ID) ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY(Customer_ID) REFERENCES Customer(ID) ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8