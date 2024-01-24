// Uma factory retorna uma nova instanca / novo objeto

module.exports = () => {
	return {
		valor: 1,
		inc(){
			this.valor++
		}
	};
};
