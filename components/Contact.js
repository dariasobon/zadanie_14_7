var Contact = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired,
    },

    render: function() {
        return (
            <div className='ContactItem'>
                <img className='contactImage' src='http://icons.veryicon.com/ico/System/100%20Flat%20Vol.%202/contacts.ico'/>
                <div className='info'>
                    <p>Imię:{ this.props.item.firstName }</p>
                    <p>Nazwisko:{ this.props.item.lastName }</p>
                    <a href={ 'mailto:' + this.props.item.email }> { this.props.item.email } </a>
                </div>
            </div>
        );
    },
});