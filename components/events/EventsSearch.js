import Button from '../ui/Button'
import classes from './EventsSearch.module.css'
import {useRef} from 'react'

function EventsSearch(props) {
    const yearInput = useRef()
    const monthInput = useRef()
    const submitHandler = (event) => {
        event.preventDefault()
        const selectedYear = yearInput.current.value
        const selectedMonth = monthInput.current.value
        props.onSearch(selectedYear, selectedMonth)
    }
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor="year">Year</label>
                    <select id="year" ref={yearInput}>
                        <option value="2022">2022</option>
                        <option value="2022">2023</option>
                        <option value="2022">2024</option>
                        <option value="2022">2025</option>
                    </select>
                </div>
                <div className={classes.control}>
                    <label htmlFor="month">Month</label>
                    <select id="month" ref={monthInput}>
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </select>
                </div>
            </div>
            <Button>Search</Button>
        </form>
    )
}

export default EventsSearch
