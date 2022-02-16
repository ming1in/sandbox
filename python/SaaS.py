import math

initCustomer = 0
churnRate = 0.03
monthlyCustAcquisition = 200

totalCust = 0
custByMonths = []

months = 48

for i in range(months):
    thisMonthLostCustomers = totalCust * churnRate

    totalCust -= thisMonthLostCustomers
    totalCust += monthlyCustAcquisition

    custByMonths.append(totalCust)

for idx, month in enumerate(custByMonths):
    print(idx, "-", math.floor(month))


print("totalCust", totalCust)
