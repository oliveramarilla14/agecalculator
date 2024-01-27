import { helpAge } from "../helpers/helpAge";

function Details({ ageForm }) {

    let resDay,resMonth,resYear

    if (ageForm.day !== "--" && ageForm.month && "--" && ageForm.year !== "--") {
       ({ resDay, resMonth, resYear } = helpAge(ageForm.day, ageForm.month, ageForm.year))
    } else {

        ({ day: resDay, month: resMonth, year: resYear } = ageForm)
    }

    return (
        <div className="details">
            <p id="years"><span>{resYear}</span> years</p>
            <p id="months"><span>{resMonth}</span> months</p>
            <p id="days"><span>{resDay}</span> days</p>
        </div>
    )
}

export default Details;