
# Restaurant Reservation

- seeing availability

- Restaurant
  - Table
    - Booking
      - start
      - end

### Restaurant

| id   |     |
| ---- | --- |
| res1 |     |

### Tables

| id     | restaurantId | timeslots | capacity |
| ------ | ------------ | --------- | -------- |
| table1 | res1         | Array(24) | 2        |

### Timeslots

{
  start: 5pm
  end: 5:15pm
  status: unavailable
}

- book for friday 11/12 for table of 4 at 7pm at Mcdonald

```
fetch restaurant from `Restaurant` table

fetch tables from `Tables` based `restaurantId` and has a capacity of 4

SELECT *
FROM Tables AS t
WHERE t.restaurantId = "McDonald" AND t.capacity = 4

availableTime = [
  {
    start: 6pm
    tableId
  }

  ...

  {
    start: 8pm
    tableId
  }
]

interval = 15min

for each intervalStart from 6pm - 8pm

    for each table in tables

      for each interval from intervalStart to intervalStart + 1hr
        if table.timeslot[interval].status = unavailable
          continue to next table
      
      availableTime.append({start: intervalStart, tableId: table.id})
```

booking an appointment

```

booking = {
  start,
  table
}

//check if table is still able


selectedTable = table where tableId = booking.table

from interval in start to start + 1hr
  if selectedTable.timeslot[interval].status === unavailable
    throw an error and notify the customer
  else 
    selectedTable.timeslot[interval].status = unavailable
```
