import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const Switch = () => {
    const [ tenants, setTenants ] = useState( [] )

    useEffect(() => {
        axios("/api/users").then((res) => {
            console.log(res.data)
        }).catch((err) => {
            console.log(err)
        })
    })


    return (
        <>
            { tenants.map( tenat => {
                return <option value="NIC"></option>
            }) }
        </>
    )
}

const Example = () => {
    const [ unit, setUnit ] = React.useState( null )

    useEffect(() => {
        console.log("Zmieniono jednostkę", unit)
    }, [ unit ])

    const handleChange = (e) => {
        setUnit( JSON.parse( e.target.value ) )
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Multi Tenant Switcher</div>

                        <form className="px-5 py-3" onSubmit={ () => false }>
                            <select className="form-control" onChange={ (e) => handleChange(e) }>
                                <option value={ null } disabled="">Wybierz jednostkę</option>
                                <Switch />
                            </select>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'))
}

export default Example;
