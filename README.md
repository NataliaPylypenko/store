# My project store

### Modules, controllers and providers
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