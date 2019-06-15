var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'film o czarodzieju',
        image: './images/harry-potter.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film opowiadający historię króla sawanny',
        image: './images/krol-lew.jpg'
    },
    {
        id: 3,
        title: 'Gladiator',
        desc: 'Fabuła osadzona w starożytnym Rzymie, były generał rzymskich legionów pała żądzą zemsty',
        image: './images/gladiator.jpg'
    },
    {
        id: 4,
        title: 'Pokłosie',
        desc: 'Zapomniana polska wieś, której mieszkańcy starają się za wszelką cenę, aby demony przeszłości nigdy nie wyszły poza ich zamknięty krąg',
        image: './images/poklosie.jpg'
    },
    {
        id: 5,
        title: 'Gwiezdne Wojny',
        desc: 'Saga science-fiction, opowiadająca historię, która wydarzyła się dawno, dawno temu, w odległej galaktyce...',
        image: './images/star-wars.jpg'
    }
]

var Movies = React.createClass({
    propTypes: {
        items: React.PropTypes.array.isRequired
    },

    render: function() {
        var moviesList = this.props.items.map(function(elem){
            return React.createElement(OneOfMovies, {
                key: elem.id,
                title: elem.title,
                desc: elem.desc,
                image: elem.image
            }, );
        });
        return (
            React.createElement('div', {className: 'listOfMovies'},
                React.createElement('h1', {}, 'List of movies'),
                React.createElement('ul', {}, moviesList)
            )
        );
    }
});

var OneOfMovies = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
        desc: React.PropTypes.string.isRequired,
        image: React.PropTypes.string.isRequired
    },

    render: function() {
        return (
            React.createElement('li', {},
                React.createElement(MovieTitle, {title: this.props.title},
                ),
                React.createElement(MovieDesc, {desc: this.props.desc},
                ),
                React.createElement(MovieImage, {image: this.props.image},
                )
            )
        )
    }
});

var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired
    },

    render: function() {
        return (
            React.createElement('h2', {}, this.props.title)
        )
    }
})

var MovieDesc = React.createClass({
    propTypes: {
        desc: React.PropTypes.string.isRequired
    },

    render: function() {
        return (
            React.createElement('p', {}, this.props.desc)
        )
    }
})

var MovieImage = React.createClass({
    propTypes: {
        image: React.PropTypes.string.isRequired
    },

    render: function() {
        return (
            React.createElement('img', {
                src: this.props.image
            })
        )
    }
})


var renderMovie = React.createElement(Movies, {items: movies});

ReactDOM.render(renderMovie, document.getElementById('app'));
