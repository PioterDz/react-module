var Movie = React.createClass({
    propTypes: {
        list: React.PropTypes.object.isRequired,
    },

    render: function() {
        return (
            React.createElement('li', {key: movie.id},
                React.createElement('h2', {}, movie.title),
                React.createElement('p', {}, movie.desc),
                React.createElement('img', {src: movie.image})
            )
        )
    }
})

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

var element = React.createElement(Movie, {key: movie.id});

ReactDOM.render(element, document.getElementById('app'));