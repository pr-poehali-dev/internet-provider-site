import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Wifi" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-secondary">NetConnect</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('tariffs')} className="text-foreground hover:text-primary transition-colors">
                Тарифы
              </button>
              <button onClick={() => scrollToSection('coverage')} className="text-foreground hover:text-primary transition-colors">
                Покрытие
              </button>
              <button onClick={() => scrollToSection('support')} className="text-foreground hover:text-primary transition-colors">
                Поддержка
              </button>
              <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">
                О компании
              </button>
              <button onClick={() => scrollToSection('contacts')} className="text-foreground hover:text-primary transition-colors">
                Контакты
              </button>
              <Button onClick={() => scrollToSection('cabinet')} variant="default">
                Личный кабинет
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="py-20 bg-gradient-to-br from-secondary via-secondary to-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Надежный интернет для вашего бизнеса и дома
            </h1>
            <p className="text-xl mb-8 text-white/90 animate-fade-in">
              Высокоскоростное подключение, стабильная работа и профессиональная поддержка 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <Button size="lg" onClick={() => scrollToSection('tariffs')} className="bg-white text-primary hover:bg-white/90">
                Выбрать тариф
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('coverage')} className="border-white text-white hover:bg-white/10">
                Проверить покрытие
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center border-none shadow-lg hover-scale">
              <CardContent className="pt-6">
                <Icon name="Zap" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">До 1 Гбит/с</h3>
                <p className="text-muted-foreground">Максимальная скорость интернета</p>
              </CardContent>
            </Card>
            <Card className="text-center border-none shadow-lg hover-scale">
              <CardContent className="pt-6">
                <Icon name="Shield" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">99.9% Uptime</h3>
                <p className="text-muted-foreground">Гарантия стабильности</p>
              </CardContent>
            </Card>
            <Card className="text-center border-none shadow-lg hover-scale">
              <CardContent className="pt-6">
                <Icon name="HeadphonesIcon" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">24/7</h3>
                <p className="text-muted-foreground">Круглосуточная поддержка</p>
              </CardContent>
            </Card>
            <Card className="text-center border-none shadow-lg hover-scale">
              <CardContent className="pt-6">
                <Icon name="Users" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">50 000+</h3>
                <p className="text-muted-foreground">Довольных клиентов</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="tariffs" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Тарифные планы</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Выберите оптимальный тариф для ваших задач</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover-scale border-2 hover:border-primary transition-all">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-muted text-foreground">Базовый</Badge>
                <CardTitle className="text-3xl">100 Мбит/с</CardTitle>
                <CardDescription className="text-2xl font-bold text-foreground mt-2">₽499/мес</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Скорость до 100 Мбит/с</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Безлимитный трафик</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Поддержка 24/7</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Wi-Fi роутер в аренду</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">Подключить</Button>
              </CardFooter>
            </Card>

            <Card className="hover-scale border-2 border-primary shadow-xl relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground">Популярный</Badge>
              </div>
              <CardHeader>
                <Badge className="w-fit mb-2">Оптимальный</Badge>
                <CardTitle className="text-3xl">300 Мбит/с</CardTitle>
                <CardDescription className="text-2xl font-bold text-foreground mt-2">₽799/мес</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Скорость до 300 Мбит/с</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Безлимитный трафик</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Приоритетная поддержка</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Wi-Fi роутер в подарок</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Статический IP-адрес</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Подключить</Button>
              </CardFooter>
            </Card>

            <Card className="hover-scale border-2 hover:border-primary transition-all">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-secondary text-secondary-foreground">Премиум</Badge>
                <CardTitle className="text-3xl">1 Гбит/с</CardTitle>
                <CardDescription className="text-2xl font-bold text-foreground mt-2">₽1 299/мес</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Скорость до 1 Гбит/с</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Безлимитный трафик</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>VIP поддержка</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Премиум Wi-Fi роутер</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Статический IP-адрес</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Приоритетный канал</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">Подключить</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section id="coverage" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Покрытие сети</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Проверьте доступность наших услуг в вашем районе</p>
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <Input placeholder="Введите ваш адрес" className="h-12" />
                  <Button className="w-full h-12">Проверить покрытие</Button>
                </div>
                <div className="mt-8 p-6 bg-muted/50 rounded-lg">
                  <div className="flex items-start gap-3 mb-4">
                    <Icon name="MapPin" size={24} className="text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">Наша сеть охватывает:</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Все районы центра города</li>
                        <li>• Спальные районы и новостройки</li>
                        <li>• Бизнес-центры и офисные здания</li>
                        <li>• Жилые комплексы</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="support" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Поддержка</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Ответы на часто задаваемые вопросы</p>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Как быстро происходит подключение?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Стандартный срок подключения составляет 1-3 рабочих дня с момента оформления заявки. В некоторых случаях возможно подключение в день обращения.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Какое оборудование нужно для подключения?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Мы предоставляем всё необходимое оборудование: роутер Wi-Fi и сетевой кабель. При подключении тарифа от 300 Мбит/с роутер предоставляется бесплатно.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Можно ли поменять тариф?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Да, вы можете изменить тариф в любое время через личный кабинет или обратившись в службу поддержки. Изменения вступают в силу в течение 24 часов.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Как оплатить услуги?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Оплатить можно через личный кабинет банковской картой, через терминалы оплаты, в отделениях банков или настроить автоплатёж.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Что делать при проблемах с подключением?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Свяжитесь с нашей службой поддержки по телефону 8-800-XXX-XX-XX (звонок бесплатный) или через онлайн-чат в личном кабинете. Мы работаем 24/7.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">Не нашли ответ на свой вопрос?</p>
              <Button size="lg" variant="outline">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Написать в поддержку
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">О компании</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">NetConnect — ваш надежный провайдер интернет-услуг</p>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-none shadow-lg">
                <CardContent className="pt-6">
                  <Icon name="Award" size={40} className="text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Наша миссия</h3>
                  <p className="text-muted-foreground">
                    Обеспечить каждого клиента стабильным и высокоскоростным интернетом по доступной цене. Мы стремимся к максимальному качеству обслуживания и постоянному развитию нашей сети.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg">
                <CardContent className="pt-6">
                  <Icon name="Target" size={40} className="text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Наши ценности</h3>
                  <p className="text-muted-foreground">
                    Надежность, профессионализм и открытость в общении с клиентами. Мы всегда на связи и готовы решить любую проблему в кратчайшие сроки.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-12 text-center space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-white rounded-lg shadow">
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <div className="text-muted-foreground">лет на рынке</div>
                </div>
                <div className="p-6 bg-white rounded-lg shadow">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-muted-foreground">км оптоволокна</div>
                </div>
                <div className="p-6 bg-white rounded-lg shadow">
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <div className="text-muted-foreground">удовлетворенность</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Контакты</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Свяжитесь с нами удобным способом</p>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card className="border-none shadow-lg">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Icon name="Phone" size={24} className="text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">Телефон</h4>
                        <p className="text-muted-foreground">8-800-XXX-XX-XX</p>
                        <p className="text-sm text-muted-foreground">Бесплатно по России</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Icon name="Mail" size={24} className="text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">Email</h4>
                        <p className="text-muted-foreground">support@netconnect.ru</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Icon name="MapPin" size={24} className="text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">Адрес офиса</h4>
                        <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 123</p>
                        <p className="text-sm text-muted-foreground">Пн-Пт: 9:00-19:00</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle>Отправить сообщение</CardTitle>
                <CardDescription>Мы ответим в течение 24 часов</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <Input placeholder="Ваше имя" />
                  <Input type="email" placeholder="Email" />
                  <Input type="tel" placeholder="Телефон" />
                  <Textarea placeholder="Ваше сообщение" rows={4} />
                  <Button className="w-full">Отправить</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="cabinet" className="py-20 bg-gradient-to-br from-muted/50 to-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Личный кабинет</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Управляйте своими услугами онлайн</p>
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="account" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="account">Мой аккаунт</TabsTrigger>
                <TabsTrigger value="services">Услуги</TabsTrigger>
                <TabsTrigger value="payments">Платежи</TabsTrigger>
              </TabsList>
              
              <TabsContent value="account" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Личные данные</CardTitle>
                    <CardDescription>Информация о вашем аккаунте</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Имя</label>
                        <p className="text-lg font-semibold">Иван Петров</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Договор №</label>
                        <p className="text-lg font-semibold">123456789</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Телефон</label>
                        <p className="text-lg font-semibold">+7 (999) 123-45-67</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Email</label>
                        <p className="text-lg font-semibold">ivan@example.com</p>
                      </div>
                    </div>
                    <Button variant="outline">Изменить данные</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="services" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Текущий тариф</CardTitle>
                    <CardDescription>Информация о вашем подключении</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                        <div>
                          <h3 className="text-xl font-bold mb-1">Оптимальный 300 Мбит/с</h3>
                          <p className="text-muted-foreground">Активен до: 15.12.2024</p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-primary">₽799/мес</p>
                          <Badge className="mt-1 bg-green-500">Активен</Badge>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 border rounded-lg">
                          <Icon name="Download" size={24} className="text-primary mb-2" />
                          <p className="text-sm text-muted-foreground">Скорость загрузки</p>
                          <p className="text-2xl font-bold">287 Мбит/с</p>
                        </div>
                        <div className="p-4 border rounded-lg">
                          <Icon name="Upload" size={24} className="text-primary mb-2" />
                          <p className="text-sm text-muted-foreground">Скорость отдачи</p>
                          <p className="text-2xl font-bold">292 Мбит/с</p>
                        </div>
                      </div>
                      <Button className="w-full">Изменить тариф</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="payments" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Баланс и платежи</CardTitle>
                    <CardDescription>Управление платежами</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="p-6 bg-gradient-to-br from-primary to-primary/80 text-white rounded-lg">
                        <p className="text-sm opacity-90 mb-1">Текущий баланс</p>
                        <p className="text-4xl font-bold">₽1 250.00</p>
                        <p className="text-sm opacity-90 mt-2">Достаточно на 1 месяц</p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold">Быстрое пополнение</h4>
                        <div className="grid grid-cols-4 gap-2">
                          <Button variant="outline">₽500</Button>
                          <Button variant="outline">₽1000</Button>
                          <Button variant="outline">₽2000</Button>
                          <Button variant="outline">₽5000</Button>
                        </div>
                      </div>
                      <Button className="w-full" size="lg">
                        <Icon name="CreditCard" size={20} className="mr-2" />
                        Пополнить баланс
                      </Button>
                      <div>
                        <h4 className="font-semibold mb-3">История платежей</h4>
                        <div className="space-y-2">
                          {[
                            { date: '01.11.2024', amount: '₽799.00', status: 'Успешно' },
                            { date: '01.10.2024', amount: '₽799.00', status: 'Успешно' },
                            { date: '01.09.2024', amount: '₽799.00', status: 'Успешно' },
                          ].map((payment, i) => (
                            <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                              <div>
                                <p className="font-medium">{payment.date}</p>
                                <p className="text-sm text-muted-foreground">Оплата тарифа</p>
                              </div>
                              <div className="text-right">
                                <p className="font-semibold">{payment.amount}</p>
                                <Badge variant="outline" className="text-green-600 border-green-600">
                                  {payment.status}
                                </Badge>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Wifi" size={28} />
                <span className="text-xl font-bold">NetConnect</span>
              </div>
              <p className="text-white/80 text-sm">
                Надежный интернет-провайдер для дома и бизнеса
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#tariffs" className="hover:text-white transition-colors">Тарифы</a></li>
                <li><a href="#coverage" className="hover:text-white transition-colors">Покрытие</a></li>
                <li><a href="#cabinet" className="hover:text-white transition-colors">Личный кабинет</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#about" className="hover:text-white transition-colors">О компании</a></li>
                <li><a href="#support" className="hover:text-white transition-colors">Поддержка</a></li>
                <li><a href="#contacts" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>8-800-XXX-XX-XX</li>
                <li>support@netconnect.ru</li>
                <li>Работаем 24/7</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
            <p>© 2024 NetConnect. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
