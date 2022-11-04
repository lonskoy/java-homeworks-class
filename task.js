//Задача №1

class PrintEditionItem {
	constructor (name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix() {
		this.state = this.state * 1.5;
		if(this.state > 100) {
			this.state = 100;
		}
	}

	set newState(condition) {
		if(condition < 0) {
			return this.state = 0;
		}
		if(condition > 100) {
			return this.state = 100;
		}
		else {
			return this.state = condition;
		}
	}

	get newState() {
		return this.state;
	}
}

	class Magazine extends PrintEditionItem {
		constructor(name, releaseDate, pagesCount) {
			super(name, releaseDate, pagesCount);
			this.type = 'Magazine';
		}
	}

	class Book extends PrintEditionItem {
		constructor(author, name, releaseDate, pagesCount) {
			super(name, releaseDate, pagesCount);
			this.type = 'Magazine';
			this.author = author;
		}
	}

	class NovelBook extends Book {
		constructor(author, name, releaseDate, pagesCount) {
			super(author, name, releaseDate, pagesCount);
			this.type = 'novel';
		}
	}

	class FantasticBook extends Book {
		constructor(author, name, releaseDate, pagesCount) {
			super(author, name, releaseDate, pagesCount);
			this.type = 'fantastic';
		}
	}

	class DetectiveBook extends Book {
		constructor(author, name, releaseDate, pagesCount) {
			super(author, name, releaseDate, pagesCount);
			this.type = 'detective';
		}
	}

//Задача №2

	class Library {
		constructor(name, books) {
			this.name = name;
			this.books = [];
		}

		addBook(book) {
			if(book.state > 30) {
				this.books.push(book);
			}
		}

		findBookBy(type, value) {                                 //По чему метод всегда возращает null?
			for (let i = 0; i < this.books.length; i++) {
				if(this.books[i].type === value) {
					return this.books[i];
				}
				else {
					return null;
				}
			}
		}

		giveBookByName(bookName) {                              //По чему метод всегда возращает null?
			for (let i = 0; i < this.books.length; i++) {
				if(this.books[i].name === bookName) {
					delete this.books[i];
				}
				else {
					return null;
				}
			}
		}
	}

//Задача №3

class Student {
	constructor(name) {
		this.name = name;
      this.subject = [];
	}

	exclude() {
		delete this.subject;
		this.exclude = 'Исключен за попытку подделать оценки';
	}

	addMark(subjectGrade, subjectName) {
		if(subjectGrade >= 1 && subjectGrade <= 5) {
			this.subject.push({grade: subjectGrade, name: subjectName});
		}  
		else {
			console.log('Была введена некорректная оценка!');
			this.exclude();
		}
	}

	getAverageBySubject(nameSub) {
		let sum = 0;
		let count = 0 ;
		for (let i = 0; i < this.subject.length; i++) {
			if(this.subject[i].name === nameSub ) {
				count += 1;
				sum += this.subject[i].grade;     
			}
			else {
				console.log('Название предметa введено неверно!');
			}
		}
		return sum / count;	
	}

	getAverage() {
		let sum = 0;
		for (let i = 0; i < this.subject.length; i++) {
				sum += this.subject[i].grade;     
		}
		return sum / this.subject.length;	
	}
}