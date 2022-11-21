//Задача №1

class PrintEditionItem {
	constructor (name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this._state = 100;
		this.type = null;
	}

	set state(condition) {
		if(condition < 0) {
			return this._state = 0;
		}
		if(condition > 100) {
			return this._state = 100;
		}
		return this._state = condition;
	}

	get state() {
		return this._state;
	}

	fix() {
		this.state = this.state * 1.5;
	}
}

	class Magazine extends PrintEditionItem {
		constructor(name, releaseDate, pagesCount) {
			super(name, releaseDate, pagesCount);
			this.type = 'magazine';
		}
	}

	class Book extends PrintEditionItem {
		constructor(author, name, releaseDate, pagesCount) {
			super(name, releaseDate, pagesCount);
			this.type = 'book';
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
			if(book._state > 30) {
				this.books.push(book);
			}
		}

		findBookBy(type, value) {                                 
			for (let i = 0; i < this.books.length; i++) {
				if(this.books[i][type] === value) {
					return this.books[i];
				}
			}
			return null;
		}

		giveBookByName(bookName) {                        
			
			let tempBook = this.books.find(elem => elem.name === bookName);
			let tempIndex = this.books.findIndex(elem => elem.name === bookName);
				if (tempIndex > -1) {
					this.books.splice(tempIndex, 1);
					return tempBook;
				}
			return null;
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