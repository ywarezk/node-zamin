/**
 * basic role authorization
 * user.role ['admin', 'user', 'guest', 'anonymous']
 
 app.get('/api/users/', authorizedRoles(['admin', 'user']) ,function(req, res) {
	 res.send('secret data')
 })
 
 */
 
module.exports = function authorizedRoles(roles) {
	return function(req, res, next) {
		const userRole = req.user.role;
		const foundRole = roles.find(function(roleFromArray) {
			return roleFromArray === userRole
		});
		
		if (foundRole) {
			next();
		} else {
			res.status(403).json({
				error: 'user is not allowed'
			})
		}
	}
}