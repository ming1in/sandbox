import datetime

ARRAY_OF_DAY_NAME = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
]

jfk_birth_year = 1917
jfk_birth_month = 5
jfk_birth_day = 29
jfk_birthday = datetime.datetime(jfk_birth_year, jfk_birth_month, jfk_birth_day)
print(
    "JFK was born on ",
    jfk_birthday,
    "which was a ",
    ARRAY_OF_DAY_NAME[jfk_birthday.weekday()],
    ".",
)


def nextNbirthday(month, day, n):
    '''
    Given an interger month, integer day, and integer n, calculate and return a list of the dates and the weekend day the next n years when the birthday falls on a weekend.
    '''
    
    current_year = datetime.datetime.now().year
    
    result = []
    
    for i in range(n):
        next_birthday = datetime.datetime(current_year + i, month, day)
        weekday = next_birthday.strftime("%A")
        
        if weekday == "Saturday" or weekday == "Sunday":
          result.append([next_birthday.year, weekday])
    
    return result
    


N = 14
day_list = nextNbirthday(jfk_birth_month, jfk_birth_day, N)

print(day_list)
