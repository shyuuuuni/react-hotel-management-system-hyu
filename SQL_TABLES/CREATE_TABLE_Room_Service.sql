CREATE TABLE Room_Service (
	ID INT AUTO_INCREMENT ,
	Room_Num INT NOT NULL,
	Hotel_ID INT NOT NULL,
	Staff_ID INT NOT NULL,
	Order_Time DATETIME NOT NULL,
	Assigned_Time DATETIME NOT NULL,
	Request TEXT NOT NULL,
	Is_Done BOOLEAN NOT NULL,
	PRIMARY KEY(ID),
	FOREIGN KEY(Room_Num) REFERENCES Room(Room_Num) ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY(Hotel_ID) REFERENCES Hotel(ID) ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY(Staff_ID) REFERENCES Staff(ID) ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8