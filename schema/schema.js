const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLSchema
} = require('graphql');

const Director = require('../models/Director');
const Pelicula = require('../models/Pelicula');
const Actor = require('../models/Actor');

const DirectorType = new GraphQLObjectType({

    name: 'Director',

    fields: () => ({
        id: { type: GraphQLInt },
        nombre: { type: GraphQLString },
        nacionalidad: { type: GraphQLString }
    })

});

const ActorType = new GraphQLObjectType({

    name: 'Actor',

    fields: () => ({
        id: { type: GraphQLInt },
        nombre: { type: GraphQLString }
    })

});

const PeliculaType = new GraphQLObjectType({

    name: 'Pelicula',

    fields: () => ({

        id: { type: GraphQLInt },

        titulo: { type: GraphQLString },

        anio: { type: GraphQLInt },

        director: {

            type: DirectorType,

            async resolve(parent) {

                return await parent.getDirector();

            }

        },

        actores: {

            type: new GraphQLList(ActorType),

            async resolve(parent) {

                return await parent.getActors();

            }

        }

    })

});
