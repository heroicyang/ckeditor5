module.exports = () => ({
	getTagName: (pkg) => {
		return `${pkg.name.substring(10)}-${pkg.version}`
	},
});
