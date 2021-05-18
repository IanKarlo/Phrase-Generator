const authors = ['Elon Musk', 'Jeff Bezos', 'Warren Buffet', 'Bill Gates'];


class API {
	constructor() {
		this.author = authors[Math.floor(Math.random() * authors.length)];
		this.phrase = '';
	}


	async getPhrase(cb) {

		const result = await axios.get(`https://minhastack.herokuapp.com/pensador?term=${this.author}&max=${30}`);
		const tam = result.data.total;

		const local = localStorage.getItem('phrases');


		if(local) {
			const saved_phrases = JSON.parse(local);
			let new_phrase = result.data.phrases[Math.floor(Math.random() * tam)];
			let cnt = 0
			while((saved_phrases.find(p => p.text === new_phrase.text) !== undefined || new_phrase.author !== this.author) && cnt < 1000) {
				new_phrase = result.data.phrases[Math.floor(Math.random() * tam)];
				cnt++;
			}

			if(cnt >= 1000) {
				this.phrase = saved_phrases[0].text;
				this.author = saved_phrases[0].author;
				saved_phrases.push(saved_phrases[0]);
				saved_phrases.shift();
				localStorage.setItem('phrases', JSON.stringify(saved_phrases));
			} else {
				saved_phrases.push(new_phrase);
				this.phrase = new_phrase.text;
				if(saved_phrases.length > 30) saved_phrases.shift();
				localStorage.setItem('phrases', JSON.stringify(saved_phrases));
			}
			

		} else {
			let new_phrase = result.data.phrases[Math.floor(Math.random() * tam)];
			const saved_phrases = []
			this.phrase = new_phrase.text;
			saved_phrases.push(new_phrase);
			localStorage.setItem('phrases', JSON.stringify(saved_phrases));
		}

		if(cb) cb();
	}
}