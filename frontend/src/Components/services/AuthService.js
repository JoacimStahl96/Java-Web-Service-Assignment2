const AuthService = async (route, action, method, data) => {
	const _unAuthorized = {
		Authed: false,
	};

	const _method = (method) => {
		if (method) {
			return {
				method: method,
				Headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			};
		}
		return undefined;
	};
	try {
		const res = await fetch(`/${route}/${action}`, _method(method));
		if (res !== null) {
			const data = await res.json;
			return data;
		} else {
			return _unAuthorized;
		}
	} catch (error) {
		return { error };
	}
};
export default AuthService;
