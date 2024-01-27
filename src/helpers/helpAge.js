export function helpAge(day,month,year) {
    const today = new Date()
    
    const todayDay = today.getDate()
    const todayMonth = today.getMonth() + 1
    const todayYear = today.getFullYear()

    let resDay, resMonth, resYear
    
    resYear = todayYear - year
    
    if (todayMonth >= month) {
        resMonth = todayMonth - month
    } else {   
        resYear--
        resMonth = todayMonth + 12 - month
    }
    
    
    if( todayDay>= day) resDay= todayDay-day
    else{
        resMonth--
        if (resMonth < 0) {
            resYear--
            resMonth += 12
        }

        let monthDays= new Date(todayYear,todayMonth,0).getDate()
        resDay = todayDay + monthDays - day
    }
    
    
    return( {resDay,resMonth,resYear})
    
    }

