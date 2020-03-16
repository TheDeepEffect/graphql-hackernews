const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./../prisma-mongo/generated/prisma-client');

const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const User = require('./resolvers/User');
const Link = require('./resolvers/Link');
const Subscription = require('./resolvers/Subscription');

const resolvers = {
	Query,
	Mutation,
	Subscription,
	User,
	Link,
	// Query: {
	// 	info: () => `API for hackernews clone`,
	// 	feed: (parent, args, context, info) => context.prisma.links(),
	// },
	// Mutation: {
	// 	post: (parent, args, context) =>
	// 		context.prisma.createLink({
	// 			url: args.url,
	// 			description: args.description,
	// 		}),
	// 	updateLink: (parent, args) => {
	// 		const link = {
	// 			id: args.id,
	// 			description: args.description,
	// 			url: args.description,
	// 		};
	// 		links.splice(
	// 			links.findIndex(post => post.id === args.id),
	// 			1,
	// 			link
	// 		);
	// 		return link;
	// 	},
	// 	deleteLink: (parent, args) => {
	// 		const link = links.find(post => post.id === args.id);
	// 		links.splice(
	// 			links.findIndex(post => post.id === args.id),
	// 			1
	// 		);
	// 		return link;
	// 	},
	// },
};

const server = new GraphQLServer({
	typeDefs: './src/schema.graphql',
	resolvers,
	context: request => {
		return {
			...request,
			prisma,
		};
	},
});

server.start(() => console.log('Server Running....'));
