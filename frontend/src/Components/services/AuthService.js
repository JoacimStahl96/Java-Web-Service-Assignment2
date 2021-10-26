const AuthService = async (route, action, method, data) => {
	const _unAuthorized = {
		Authed: false,
	};

	const _method = (method) => {
		if (method) {
			return {
				method: method,
				body: JSON.stringify(data),
				headers: {
					"Content-Type": "application/json",
				},
			};
		}
		return undefined;
	};
	try {
		const res = await fetch(`/${route}/${action}`, _method(method));
		if (res !== null) {
			const contentType = res.headers.get("Content-Type");
			if (contentType.indexOf("application/json") !== -1) {
				const data = res.json();
				return data;
			} else {
				const data = res.text();
				return data;
			}
		} else {
			return _unAuthorized;
		}
	} catch (error) {
		return { error };
	}
};
export default AuthService;
