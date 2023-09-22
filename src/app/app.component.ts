import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currency = '$';

  changeCurrency() {
    let newCurrency = '$';
    let coefficient = 1;

    if (this.currency === '$') {
      newCurrency = '₽';
      coefficient = 98;
    } else if (this.currency === '₽') {
      newCurrency = 'BYN';
      coefficient = 3.2;
    } else if (this.currency === 'BYN') {
      newCurrency = '€';
      coefficient = 0.9;
    } else if (this.currency === '€') {
      newCurrency = '¥';
      coefficient = 6.9;
    }

    this.currency = newCurrency;

    this.productsData.forEach(item => {
      item.price = +(item.basePrice * coefficient).toFixed(1);
    });
  }

  form = this.fb.group({
    order: ['', Validators.required],
    name: ['', Validators.required],
    phone: ['', Validators.required]
  });

  productsData = [
    {
      title: 'Бургер чеддер & бекон',
      image: 'burger1.png',
      text: 'Котлета из говядины криспи, булочка, томат, сыр Чеддер, грудинка, лук красный, салат айсбер, майонез, кетчуп, сырный соус',
      price: 8,
      basePrice: 8,
      grams: 360
    },
    {
      title: 'BBQ с беконом и курицей',
      image: 'burger2.png',
      text: 'Булочка бриошь с кунжутом, куриная котлета, сыр чеддер, томат, огурец маринованный, лук маринованный, салат Ромен, бекон, соус BBQ',
      price: 7,
      basePrice: 7,
      grams: 390
    },
    {
      title: 'Дабл биф бургер',
      image: 'burger3.png',
      text: 'Две говяжьи котлеты, сыр чеддер, салат романо, маринованные огурцы, свежий томат, бекон, красный лук, соус бургер, горчица',
      price: 10,
      basePrice: 10,
      grams: 420
    },
    {
      title: 'Баварский бургер',
      image: 'burger4.png',
      text: 'Булочка для бургера, говяжья котлета, красный лук, сыр, охотничья колбаска, соус барбекю, соус сырный, салат айсберг',
      price: 7,
      basePrice: 7,
      grams: 220
    },
    {
      title: 'Бекон чизбургер',
      image: 'burger5.png',
      text: 'Булочка для бургера, говяжья котлета, грудинка, помидор, огурец маринованный, сыр, сырный соус, кетчуп, зелень',
      price: 8,
      basePrice: 8,
      grams: 220
    },
    {
      title: 'Индиана бургер',
      image: 'burger6.png',
      text: 'Булочка для бургера, котлета куриная, грудинка, яйцо, огурец маринованный, криспи лук, кетчуп, соус сырный, горчица, зелень',
      price: 9,
      basePrice: 9,
      grams: 320
    }
  ];

  constructor(private fb: FormBuilder) {
  }

  scrollTo(target: HTMLElement, burger?: any) {
    target.scrollIntoView({behavior: 'smooth'});
    if (burger) {
      this.form.patchValue({order: burger.title + ' (' + burger.price + ' ' + this.currency + ')'});
    }
  }

  confirmOrder() {
    if (this.form.valid) {
      alert('Спасибо за заказ! Мы скоро с Вами свяжемся!');
      this.form.reset();
    }
  }
}
