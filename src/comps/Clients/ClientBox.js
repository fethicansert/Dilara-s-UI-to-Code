

const ClientBox = ({ avatar, name, title, description, client }) => {

    return (
        <div className='client-box'>

            <p className="client-description">{client.description}</p>

            <div className="client-flex-row">

                <img width={60} height={60} className="client-avatar" src={client.avatar} />

                <div className="client-flex-column">

                    <span className="client-name">{client.name}</span>

                    <span className="client-title">{client.title}</span>

                </div>

            </div>
        </div>
    )
}

export default ClientBox
