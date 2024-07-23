import React, { useState } from "react";


const DogYearsCalculator = () => {
    const [dogName, setDogName] = useState<string>("");
    const [humanYears, setHumanYears] = useState<number>(0);
    const [dogYears, setDogYears] = useState({ years: 0, months: 0, days: 0 });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const calculateDogYears = 16 * Math.log(humanYears) + 31;

        const years = Math.floor(calculateDogYears);
        const months = Math.floor((calculateDogYears - years) * 12);
        const days = Math.floor(((calculateDogYears - years) * 12 - months) * 30);

        setDogYears({ years, months, days });
    };

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="dogName">
                            What is your dog's name?
                            <input
                                type="text"
                                id="dogName"
                                value={dogName}
                                placeholder="Fido"
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDogName(e.target.value)}
                            />
                        </label>

                        <label>
                            How old is your {dogName} in human years?
                            <input
                                type="number"
                                name="humanYears"
                                value={humanYears}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setHumanYears(e.target.valueAsNumber)}
                            />
                        </label>
                    </div>
                    <div>
                        <button type="submit">Calculate</button>
                        {dogName && (
                            <div>
                                <label>
                                    Your dog {dogName} is {dogYears.years} years, {dogYears.months} months, and {dogYears.days} days old in dog years.
                                </label>
                            </div>
                        )}
                    </div >
                </form>
            </div>

        </>
    );
};

export default DogYearsCalculator;