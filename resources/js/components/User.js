import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const Switch = () => {
    const [ tenants, setTenants ] = useState( [] )

    useEffect(() => {

    })


    return (
        <>
            { tenants.map( tenat => {
                return <option value="NIC"></option>
            }) }
        </>
    )
}

const App = ( props ) => {
    const { tenant } = props
    const [ users, setUsers ] = React.useState( [] )
    const test = React.createRef();

    const fetchUsers = () => {
        axios(`/api/users?u=${ tenant }`).then((res) => {
            setUsers( res.data )
        }).catch((err) => {
            console.log( err.response.data )
        })
    }

    useEffect(() => {
        fetchUsers();
    }, [0])

    const handleReload = () => {
        fetchUsers()
    }

    return (
        <div className="container-fluid">
            <div className="row mt-5 justify-content-center">
                <div className="col col-12 col-md-8 col-lg-6">
                    <div className="card">
                        <div className="card-header">Multi Tenant Users</div>

                        <div className="p-3">
                            <table className="table table-bordered table-hover mb-0">
                                <thead>
                                    <tr>
                                        <th>Imię</th>
                                        <th>Nazwisko</th>
                                        <th className="w-100 text-right">Identyfikator</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { users.map( user => (
                                        <tr key={ user.id }>
                                            <td>{ user.name }</td>
                                            <td>{ user.surname }</td>
                                            <td className="w-100 text-right">{ user.u_card }</td>
                                        </tr>
                                    )) }
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tfoot>
                            </table>
                            <div className="text-center mt-3">
                                <button type="button" className="btn btn-primary" onClick={ () => handleReload() }>Reload</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// <form className="px-5 py-3" onSubmit={ () => false }>
//     <select className="form-control" onChange={ (e) => handleChange(e) }>
//         <option value={ null } disabled="">Wybierz jednostkę</option>
//         <option value="sub1">Sub1</option>
//         <option value="sub2">Sub2</option>
//         <option value="sub3">Sub3</option>
//         <Switch />
//     </select>
// </form>

const root = document.getElementById('root');
if( root !== undefined ) {
    const props = Object.assign({}, root.dataset)
    ReactDOM.render(<App { ...props }/>, root)
}

export default App;
