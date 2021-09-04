import React from 'react'

const NewestPerson = ({ newestPerson }) => {

    React.useEffect(() => {
        const newestPersonName = `${newestPerson.firstName} ${newestPerson.lastName}`;
        document.title = newestPersonName;
        console.log('Page load');
        return () => {
            console.log('Unmounted') // which will be called before the next render
        }
    }, [newestPerson])

    return (
        <div className="col col-sm-12">
            <h2 className="mt-4 text-center">
                Newest Person: {`${newestPerson.firstName} ${newestPerson.lastName}`}
            </h2>
        </div>
    )
}

export default NewestPerson
