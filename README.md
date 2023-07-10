# My project store

## Modules, controllers and providers

### Modules
AppModule: AuthModule, ProductModule, ReviewModule, TopPageModule

* module merges dependencies of one domain area
```javascript
@Module({
  imports: [],  // dependencies
  controllers: [AppController],  // controllers
  providers: [AppService],  // repository services and other providers
  exports: []  // exported providers or re-export modules
})
```
* re-export modules
```javascript
@Module({
  imports: [CommonModule],
  exports: [CommonModule]
})
export class AppModule {}
```
* global modules
```javascript
@Global()
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService], 
})
export class MyModule {}
```
* dynamic modules
```javascript
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService], 
})
export class MyModule {
  static forRoot(connection: string): DynamicModule {
    const providers = createDataBaseProviders(connection);
    return {
      module: MyModule,
      providers: providers,
      exports: providers
    } 
  }
}

@Module({
  imports: [MyModule.forRoot('connection')],
  controllers: [AppController],
  providers: [AppService], 
})
export class AppModule {}
```

create modules
`nest g module product`

create models
`nest g class product/product.model --no-spec`

### Controllers
<p>Controllers is application entry point where requests come in.</p>
<p>HTTP, MQTT, RabbitMQ, Kafka, gRPC</p> 

`http://host.com/api/product/add/1`

`main.ts`
```typescript
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  await app.listen(3000);
}
```

`product.controller.ts`
```typescript
@Controller('product')
export class ProductController {
  constructor(private readonly appService: AppService) {}

  @Get('add/:id')
  getHello(): string {
    return this.appService.getHello();
  }
}
```

Argument Decorators
* @Req()
* @Res()
* @Params(key?: string)
* @Body(key?: string)
* @Query(key?: string)
* @Headers(name?: string)
* @Session()

`main.ts`
```typescript
// Wildcard
@Controller('product*s')
export class ProductController {
  constructor(private readonly appService: AppService) {}
}
```

`product.controller.ts`
```typescript
// Custom HTTP code
@HttpCode(204)

// Custom response header
@Header('Cashe-Control', 'none')

// Redirect
@Redirect('https://mydomain.com', 301)

// Subdomain limit
@Controller({ host: ':admin.mydomain.com'})
export class ProductController {
  constructor(private readonly appService: AppService) {}
}

// Return Promise
@Get('add/:id')
async getHello(): Promice<string> {
  return this.appService.getHello();
}

// Return Observable
@Get('add/:id')
getHello(): Observable<string> {
  return this.appService.getHello();
}
```

create controllers
`nest g controller product --no-spec`


### Providers