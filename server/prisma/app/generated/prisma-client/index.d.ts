
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Scale
 * 
 */
export type Scale = $Result.DefaultSelection<Prisma.$ScalePayload>
/**
 * Model Colaborator
 * 
 */
export type Colaborator = $Result.DefaultSelection<Prisma.$ColaboratorPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Scales
 * const scales = await prisma.scale.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Scales
   * const scales = await prisma.scale.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.scale`: Exposes CRUD operations for the **Scale** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Scales
    * const scales = await prisma.scale.findMany()
    * ```
    */
  get scale(): Prisma.ScaleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.colaborator`: Exposes CRUD operations for the **Colaborator** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Colaborators
    * const colaborators = await prisma.colaborator.findMany()
    * ```
    */
  get colaborator(): Prisma.ColaboratorDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Scale: 'Scale',
    Colaborator: 'Colaborator'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "scale" | "colaborator"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Scale: {
        payload: Prisma.$ScalePayload<ExtArgs>
        fields: Prisma.ScaleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScaleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScalePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScaleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScalePayload>
          }
          findFirst: {
            args: Prisma.ScaleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScalePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScaleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScalePayload>
          }
          findMany: {
            args: Prisma.ScaleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScalePayload>[]
          }
          create: {
            args: Prisma.ScaleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScalePayload>
          }
          createMany: {
            args: Prisma.ScaleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScaleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScalePayload>[]
          }
          delete: {
            args: Prisma.ScaleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScalePayload>
          }
          update: {
            args: Prisma.ScaleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScalePayload>
          }
          deleteMany: {
            args: Prisma.ScaleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScaleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScaleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScalePayload>[]
          }
          upsert: {
            args: Prisma.ScaleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScalePayload>
          }
          aggregate: {
            args: Prisma.ScaleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScale>
          }
          groupBy: {
            args: Prisma.ScaleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScaleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScaleCountArgs<ExtArgs>
            result: $Utils.Optional<ScaleCountAggregateOutputType> | number
          }
        }
      }
      Colaborator: {
        payload: Prisma.$ColaboratorPayload<ExtArgs>
        fields: Prisma.ColaboratorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ColaboratorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColaboratorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ColaboratorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColaboratorPayload>
          }
          findFirst: {
            args: Prisma.ColaboratorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColaboratorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ColaboratorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColaboratorPayload>
          }
          findMany: {
            args: Prisma.ColaboratorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColaboratorPayload>[]
          }
          create: {
            args: Prisma.ColaboratorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColaboratorPayload>
          }
          createMany: {
            args: Prisma.ColaboratorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ColaboratorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColaboratorPayload>[]
          }
          delete: {
            args: Prisma.ColaboratorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColaboratorPayload>
          }
          update: {
            args: Prisma.ColaboratorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColaboratorPayload>
          }
          deleteMany: {
            args: Prisma.ColaboratorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ColaboratorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ColaboratorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColaboratorPayload>[]
          }
          upsert: {
            args: Prisma.ColaboratorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColaboratorPayload>
          }
          aggregate: {
            args: Prisma.ColaboratorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateColaborator>
          }
          groupBy: {
            args: Prisma.ColaboratorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ColaboratorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ColaboratorCountArgs<ExtArgs>
            result: $Utils.Optional<ColaboratorCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    scale?: ScaleOmit
    colaborator?: ColaboratorOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ScaleCountOutputType
   */

  export type ScaleCountOutputType = {
    colaborators: number
  }

  export type ScaleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    colaborators?: boolean | ScaleCountOutputTypeCountColaboratorsArgs
  }

  // Custom InputTypes
  /**
   * ScaleCountOutputType without action
   */
  export type ScaleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScaleCountOutputType
     */
    select?: ScaleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ScaleCountOutputType without action
   */
  export type ScaleCountOutputTypeCountColaboratorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ColaboratorWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Scale
   */

  export type AggregateScale = {
    _count: ScaleCountAggregateOutputType | null
    _avg: ScaleAvgAggregateOutputType | null
    _sum: ScaleSumAggregateOutputType | null
    _min: ScaleMinAggregateOutputType | null
    _max: ScaleMaxAggregateOutputType | null
  }

  export type ScaleAvgAggregateOutputType = {
    id: number | null
  }

  export type ScaleSumAggregateOutputType = {
    id: number | null
  }

  export type ScaleMinAggregateOutputType = {
    id: number | null
    user: string | null
    title: string | null
    month: string | null
    year: string | null
    periodScale: string | null
  }

  export type ScaleMaxAggregateOutputType = {
    id: number | null
    user: string | null
    title: string | null
    month: string | null
    year: string | null
    periodScale: string | null
  }

  export type ScaleCountAggregateOutputType = {
    id: number
    user: number
    title: number
    month: number
    year: number
    periodScale: number
    _all: number
  }


  export type ScaleAvgAggregateInputType = {
    id?: true
  }

  export type ScaleSumAggregateInputType = {
    id?: true
  }

  export type ScaleMinAggregateInputType = {
    id?: true
    user?: true
    title?: true
    month?: true
    year?: true
    periodScale?: true
  }

  export type ScaleMaxAggregateInputType = {
    id?: true
    user?: true
    title?: true
    month?: true
    year?: true
    periodScale?: true
  }

  export type ScaleCountAggregateInputType = {
    id?: true
    user?: true
    title?: true
    month?: true
    year?: true
    periodScale?: true
    _all?: true
  }

  export type ScaleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Scale to aggregate.
     */
    where?: ScaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scales to fetch.
     */
    orderBy?: ScaleOrderByWithRelationInput | ScaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Scales
    **/
    _count?: true | ScaleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScaleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScaleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScaleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScaleMaxAggregateInputType
  }

  export type GetScaleAggregateType<T extends ScaleAggregateArgs> = {
        [P in keyof T & keyof AggregateScale]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScale[P]>
      : GetScalarType<T[P], AggregateScale[P]>
  }




  export type ScaleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScaleWhereInput
    orderBy?: ScaleOrderByWithAggregationInput | ScaleOrderByWithAggregationInput[]
    by: ScaleScalarFieldEnum[] | ScaleScalarFieldEnum
    having?: ScaleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScaleCountAggregateInputType | true
    _avg?: ScaleAvgAggregateInputType
    _sum?: ScaleSumAggregateInputType
    _min?: ScaleMinAggregateInputType
    _max?: ScaleMaxAggregateInputType
  }

  export type ScaleGroupByOutputType = {
    id: number
    user: string
    title: string
    month: string
    year: string
    periodScale: string
    _count: ScaleCountAggregateOutputType | null
    _avg: ScaleAvgAggregateOutputType | null
    _sum: ScaleSumAggregateOutputType | null
    _min: ScaleMinAggregateOutputType | null
    _max: ScaleMaxAggregateOutputType | null
  }

  type GetScaleGroupByPayload<T extends ScaleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScaleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScaleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScaleGroupByOutputType[P]>
            : GetScalarType<T[P], ScaleGroupByOutputType[P]>
        }
      >
    >


  export type ScaleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user?: boolean
    title?: boolean
    month?: boolean
    year?: boolean
    periodScale?: boolean
    colaborators?: boolean | Scale$colaboratorsArgs<ExtArgs>
    _count?: boolean | ScaleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scale"]>

  export type ScaleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user?: boolean
    title?: boolean
    month?: boolean
    year?: boolean
    periodScale?: boolean
  }, ExtArgs["result"]["scale"]>

  export type ScaleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user?: boolean
    title?: boolean
    month?: boolean
    year?: boolean
    periodScale?: boolean
  }, ExtArgs["result"]["scale"]>

  export type ScaleSelectScalar = {
    id?: boolean
    user?: boolean
    title?: boolean
    month?: boolean
    year?: boolean
    periodScale?: boolean
  }

  export type ScaleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user" | "title" | "month" | "year" | "periodScale", ExtArgs["result"]["scale"]>
  export type ScaleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    colaborators?: boolean | Scale$colaboratorsArgs<ExtArgs>
    _count?: boolean | ScaleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ScaleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ScaleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ScalePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Scale"
    objects: {
      colaborators: Prisma.$ColaboratorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user: string
      title: string
      month: string
      year: string
      periodScale: string
    }, ExtArgs["result"]["scale"]>
    composites: {}
  }

  type ScaleGetPayload<S extends boolean | null | undefined | ScaleDefaultArgs> = $Result.GetResult<Prisma.$ScalePayload, S>

  type ScaleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScaleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScaleCountAggregateInputType | true
    }

  export interface ScaleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Scale'], meta: { name: 'Scale' } }
    /**
     * Find zero or one Scale that matches the filter.
     * @param {ScaleFindUniqueArgs} args - Arguments to find a Scale
     * @example
     * // Get one Scale
     * const scale = await prisma.scale.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScaleFindUniqueArgs>(args: SelectSubset<T, ScaleFindUniqueArgs<ExtArgs>>): Prisma__ScaleClient<$Result.GetResult<Prisma.$ScalePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Scale that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScaleFindUniqueOrThrowArgs} args - Arguments to find a Scale
     * @example
     * // Get one Scale
     * const scale = await prisma.scale.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScaleFindUniqueOrThrowArgs>(args: SelectSubset<T, ScaleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScaleClient<$Result.GetResult<Prisma.$ScalePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Scale that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScaleFindFirstArgs} args - Arguments to find a Scale
     * @example
     * // Get one Scale
     * const scale = await prisma.scale.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScaleFindFirstArgs>(args?: SelectSubset<T, ScaleFindFirstArgs<ExtArgs>>): Prisma__ScaleClient<$Result.GetResult<Prisma.$ScalePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Scale that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScaleFindFirstOrThrowArgs} args - Arguments to find a Scale
     * @example
     * // Get one Scale
     * const scale = await prisma.scale.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScaleFindFirstOrThrowArgs>(args?: SelectSubset<T, ScaleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScaleClient<$Result.GetResult<Prisma.$ScalePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Scales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScaleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Scales
     * const scales = await prisma.scale.findMany()
     * 
     * // Get first 10 Scales
     * const scales = await prisma.scale.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scaleWithIdOnly = await prisma.scale.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScaleFindManyArgs>(args?: SelectSubset<T, ScaleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Scale.
     * @param {ScaleCreateArgs} args - Arguments to create a Scale.
     * @example
     * // Create one Scale
     * const Scale = await prisma.scale.create({
     *   data: {
     *     // ... data to create a Scale
     *   }
     * })
     * 
     */
    create<T extends ScaleCreateArgs>(args: SelectSubset<T, ScaleCreateArgs<ExtArgs>>): Prisma__ScaleClient<$Result.GetResult<Prisma.$ScalePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Scales.
     * @param {ScaleCreateManyArgs} args - Arguments to create many Scales.
     * @example
     * // Create many Scales
     * const scale = await prisma.scale.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScaleCreateManyArgs>(args?: SelectSubset<T, ScaleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Scales and returns the data saved in the database.
     * @param {ScaleCreateManyAndReturnArgs} args - Arguments to create many Scales.
     * @example
     * // Create many Scales
     * const scale = await prisma.scale.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Scales and only return the `id`
     * const scaleWithIdOnly = await prisma.scale.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScaleCreateManyAndReturnArgs>(args?: SelectSubset<T, ScaleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScalePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Scale.
     * @param {ScaleDeleteArgs} args - Arguments to delete one Scale.
     * @example
     * // Delete one Scale
     * const Scale = await prisma.scale.delete({
     *   where: {
     *     // ... filter to delete one Scale
     *   }
     * })
     * 
     */
    delete<T extends ScaleDeleteArgs>(args: SelectSubset<T, ScaleDeleteArgs<ExtArgs>>): Prisma__ScaleClient<$Result.GetResult<Prisma.$ScalePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Scale.
     * @param {ScaleUpdateArgs} args - Arguments to update one Scale.
     * @example
     * // Update one Scale
     * const scale = await prisma.scale.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScaleUpdateArgs>(args: SelectSubset<T, ScaleUpdateArgs<ExtArgs>>): Prisma__ScaleClient<$Result.GetResult<Prisma.$ScalePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Scales.
     * @param {ScaleDeleteManyArgs} args - Arguments to filter Scales to delete.
     * @example
     * // Delete a few Scales
     * const { count } = await prisma.scale.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScaleDeleteManyArgs>(args?: SelectSubset<T, ScaleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScaleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Scales
     * const scale = await prisma.scale.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScaleUpdateManyArgs>(args: SelectSubset<T, ScaleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scales and returns the data updated in the database.
     * @param {ScaleUpdateManyAndReturnArgs} args - Arguments to update many Scales.
     * @example
     * // Update many Scales
     * const scale = await prisma.scale.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Scales and only return the `id`
     * const scaleWithIdOnly = await prisma.scale.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ScaleUpdateManyAndReturnArgs>(args: SelectSubset<T, ScaleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScalePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Scale.
     * @param {ScaleUpsertArgs} args - Arguments to update or create a Scale.
     * @example
     * // Update or create a Scale
     * const scale = await prisma.scale.upsert({
     *   create: {
     *     // ... data to create a Scale
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Scale we want to update
     *   }
     * })
     */
    upsert<T extends ScaleUpsertArgs>(args: SelectSubset<T, ScaleUpsertArgs<ExtArgs>>): Prisma__ScaleClient<$Result.GetResult<Prisma.$ScalePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Scales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScaleCountArgs} args - Arguments to filter Scales to count.
     * @example
     * // Count the number of Scales
     * const count = await prisma.scale.count({
     *   where: {
     *     // ... the filter for the Scales we want to count
     *   }
     * })
    **/
    count<T extends ScaleCountArgs>(
      args?: Subset<T, ScaleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScaleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Scale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScaleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScaleAggregateArgs>(args: Subset<T, ScaleAggregateArgs>): Prisma.PrismaPromise<GetScaleAggregateType<T>>

    /**
     * Group by Scale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScaleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScaleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScaleGroupByArgs['orderBy'] }
        : { orderBy?: ScaleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScaleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScaleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Scale model
   */
  readonly fields: ScaleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Scale.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScaleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    colaborators<T extends Scale$colaboratorsArgs<ExtArgs> = {}>(args?: Subset<T, Scale$colaboratorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColaboratorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Scale model
   */
  interface ScaleFieldRefs {
    readonly id: FieldRef<"Scale", 'Int'>
    readonly user: FieldRef<"Scale", 'String'>
    readonly title: FieldRef<"Scale", 'String'>
    readonly month: FieldRef<"Scale", 'String'>
    readonly year: FieldRef<"Scale", 'String'>
    readonly periodScale: FieldRef<"Scale", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Scale findUnique
   */
  export type ScaleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scale
     */
    select?: ScaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scale
     */
    omit?: ScaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScaleInclude<ExtArgs> | null
    /**
     * Filter, which Scale to fetch.
     */
    where: ScaleWhereUniqueInput
  }

  /**
   * Scale findUniqueOrThrow
   */
  export type ScaleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scale
     */
    select?: ScaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scale
     */
    omit?: ScaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScaleInclude<ExtArgs> | null
    /**
     * Filter, which Scale to fetch.
     */
    where: ScaleWhereUniqueInput
  }

  /**
   * Scale findFirst
   */
  export type ScaleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scale
     */
    select?: ScaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scale
     */
    omit?: ScaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScaleInclude<ExtArgs> | null
    /**
     * Filter, which Scale to fetch.
     */
    where?: ScaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scales to fetch.
     */
    orderBy?: ScaleOrderByWithRelationInput | ScaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scales.
     */
    cursor?: ScaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scales.
     */
    distinct?: ScaleScalarFieldEnum | ScaleScalarFieldEnum[]
  }

  /**
   * Scale findFirstOrThrow
   */
  export type ScaleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scale
     */
    select?: ScaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scale
     */
    omit?: ScaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScaleInclude<ExtArgs> | null
    /**
     * Filter, which Scale to fetch.
     */
    where?: ScaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scales to fetch.
     */
    orderBy?: ScaleOrderByWithRelationInput | ScaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scales.
     */
    cursor?: ScaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scales.
     */
    distinct?: ScaleScalarFieldEnum | ScaleScalarFieldEnum[]
  }

  /**
   * Scale findMany
   */
  export type ScaleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scale
     */
    select?: ScaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scale
     */
    omit?: ScaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScaleInclude<ExtArgs> | null
    /**
     * Filter, which Scales to fetch.
     */
    where?: ScaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scales to fetch.
     */
    orderBy?: ScaleOrderByWithRelationInput | ScaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Scales.
     */
    cursor?: ScaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scales.
     */
    skip?: number
    distinct?: ScaleScalarFieldEnum | ScaleScalarFieldEnum[]
  }

  /**
   * Scale create
   */
  export type ScaleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scale
     */
    select?: ScaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scale
     */
    omit?: ScaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScaleInclude<ExtArgs> | null
    /**
     * The data needed to create a Scale.
     */
    data: XOR<ScaleCreateInput, ScaleUncheckedCreateInput>
  }

  /**
   * Scale createMany
   */
  export type ScaleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Scales.
     */
    data: ScaleCreateManyInput | ScaleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Scale createManyAndReturn
   */
  export type ScaleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scale
     */
    select?: ScaleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Scale
     */
    omit?: ScaleOmit<ExtArgs> | null
    /**
     * The data used to create many Scales.
     */
    data: ScaleCreateManyInput | ScaleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Scale update
   */
  export type ScaleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scale
     */
    select?: ScaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scale
     */
    omit?: ScaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScaleInclude<ExtArgs> | null
    /**
     * The data needed to update a Scale.
     */
    data: XOR<ScaleUpdateInput, ScaleUncheckedUpdateInput>
    /**
     * Choose, which Scale to update.
     */
    where: ScaleWhereUniqueInput
  }

  /**
   * Scale updateMany
   */
  export type ScaleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Scales.
     */
    data: XOR<ScaleUpdateManyMutationInput, ScaleUncheckedUpdateManyInput>
    /**
     * Filter which Scales to update
     */
    where?: ScaleWhereInput
    /**
     * Limit how many Scales to update.
     */
    limit?: number
  }

  /**
   * Scale updateManyAndReturn
   */
  export type ScaleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scale
     */
    select?: ScaleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Scale
     */
    omit?: ScaleOmit<ExtArgs> | null
    /**
     * The data used to update Scales.
     */
    data: XOR<ScaleUpdateManyMutationInput, ScaleUncheckedUpdateManyInput>
    /**
     * Filter which Scales to update
     */
    where?: ScaleWhereInput
    /**
     * Limit how many Scales to update.
     */
    limit?: number
  }

  /**
   * Scale upsert
   */
  export type ScaleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scale
     */
    select?: ScaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scale
     */
    omit?: ScaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScaleInclude<ExtArgs> | null
    /**
     * The filter to search for the Scale to update in case it exists.
     */
    where: ScaleWhereUniqueInput
    /**
     * In case the Scale found by the `where` argument doesn't exist, create a new Scale with this data.
     */
    create: XOR<ScaleCreateInput, ScaleUncheckedCreateInput>
    /**
     * In case the Scale was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScaleUpdateInput, ScaleUncheckedUpdateInput>
  }

  /**
   * Scale delete
   */
  export type ScaleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scale
     */
    select?: ScaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scale
     */
    omit?: ScaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScaleInclude<ExtArgs> | null
    /**
     * Filter which Scale to delete.
     */
    where: ScaleWhereUniqueInput
  }

  /**
   * Scale deleteMany
   */
  export type ScaleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Scales to delete
     */
    where?: ScaleWhereInput
    /**
     * Limit how many Scales to delete.
     */
    limit?: number
  }

  /**
   * Scale.colaborators
   */
  export type Scale$colaboratorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Colaborator
     */
    select?: ColaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Colaborator
     */
    omit?: ColaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColaboratorInclude<ExtArgs> | null
    where?: ColaboratorWhereInput
    orderBy?: ColaboratorOrderByWithRelationInput | ColaboratorOrderByWithRelationInput[]
    cursor?: ColaboratorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ColaboratorScalarFieldEnum | ColaboratorScalarFieldEnum[]
  }

  /**
   * Scale without action
   */
  export type ScaleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scale
     */
    select?: ScaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scale
     */
    omit?: ScaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScaleInclude<ExtArgs> | null
  }


  /**
   * Model Colaborator
   */

  export type AggregateColaborator = {
    _count: ColaboratorCountAggregateOutputType | null
    _avg: ColaboratorAvgAggregateOutputType | null
    _sum: ColaboratorSumAggregateOutputType | null
    _min: ColaboratorMinAggregateOutputType | null
    _max: ColaboratorMaxAggregateOutputType | null
  }

  export type ColaboratorAvgAggregateOutputType = {
    id: number | null
    weekday: number | null
    scaleId: number | null
  }

  export type ColaboratorSumAggregateOutputType = {
    id: number | null
    weekday: number[]
    scaleId: number | null
  }

  export type ColaboratorMinAggregateOutputType = {
    id: number | null
    name: string | null
    turn: boolean | null
    woman: boolean | null
    sunday: Date | null
    scaleId: number | null
  }

  export type ColaboratorMaxAggregateOutputType = {
    id: number | null
    name: string | null
    turn: boolean | null
    woman: boolean | null
    sunday: Date | null
    scaleId: number | null
  }

  export type ColaboratorCountAggregateOutputType = {
    id: number
    name: number
    turn: number
    woman: number
    sunday: number
    weekday: number
    scaleId: number
    _all: number
  }


  export type ColaboratorAvgAggregateInputType = {
    id?: true
    weekday?: true
    scaleId?: true
  }

  export type ColaboratorSumAggregateInputType = {
    id?: true
    weekday?: true
    scaleId?: true
  }

  export type ColaboratorMinAggregateInputType = {
    id?: true
    name?: true
    turn?: true
    woman?: true
    sunday?: true
    scaleId?: true
  }

  export type ColaboratorMaxAggregateInputType = {
    id?: true
    name?: true
    turn?: true
    woman?: true
    sunday?: true
    scaleId?: true
  }

  export type ColaboratorCountAggregateInputType = {
    id?: true
    name?: true
    turn?: true
    woman?: true
    sunday?: true
    weekday?: true
    scaleId?: true
    _all?: true
  }

  export type ColaboratorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Colaborator to aggregate.
     */
    where?: ColaboratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colaborators to fetch.
     */
    orderBy?: ColaboratorOrderByWithRelationInput | ColaboratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ColaboratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colaborators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colaborators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Colaborators
    **/
    _count?: true | ColaboratorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ColaboratorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ColaboratorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ColaboratorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ColaboratorMaxAggregateInputType
  }

  export type GetColaboratorAggregateType<T extends ColaboratorAggregateArgs> = {
        [P in keyof T & keyof AggregateColaborator]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateColaborator[P]>
      : GetScalarType<T[P], AggregateColaborator[P]>
  }




  export type ColaboratorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ColaboratorWhereInput
    orderBy?: ColaboratorOrderByWithAggregationInput | ColaboratorOrderByWithAggregationInput[]
    by: ColaboratorScalarFieldEnum[] | ColaboratorScalarFieldEnum
    having?: ColaboratorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ColaboratorCountAggregateInputType | true
    _avg?: ColaboratorAvgAggregateInputType
    _sum?: ColaboratorSumAggregateInputType
    _min?: ColaboratorMinAggregateInputType
    _max?: ColaboratorMaxAggregateInputType
  }

  export type ColaboratorGroupByOutputType = {
    id: number
    name: string
    turn: boolean
    woman: boolean
    sunday: Date
    weekday: number[]
    scaleId: number
    _count: ColaboratorCountAggregateOutputType | null
    _avg: ColaboratorAvgAggregateOutputType | null
    _sum: ColaboratorSumAggregateOutputType | null
    _min: ColaboratorMinAggregateOutputType | null
    _max: ColaboratorMaxAggregateOutputType | null
  }

  type GetColaboratorGroupByPayload<T extends ColaboratorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ColaboratorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ColaboratorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ColaboratorGroupByOutputType[P]>
            : GetScalarType<T[P], ColaboratorGroupByOutputType[P]>
        }
      >
    >


  export type ColaboratorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    turn?: boolean
    woman?: boolean
    sunday?: boolean
    weekday?: boolean
    scaleId?: boolean
    scale?: boolean | ScaleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["colaborator"]>

  export type ColaboratorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    turn?: boolean
    woman?: boolean
    sunday?: boolean
    weekday?: boolean
    scaleId?: boolean
    scale?: boolean | ScaleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["colaborator"]>

  export type ColaboratorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    turn?: boolean
    woman?: boolean
    sunday?: boolean
    weekday?: boolean
    scaleId?: boolean
    scale?: boolean | ScaleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["colaborator"]>

  export type ColaboratorSelectScalar = {
    id?: boolean
    name?: boolean
    turn?: boolean
    woman?: boolean
    sunday?: boolean
    weekday?: boolean
    scaleId?: boolean
  }

  export type ColaboratorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "turn" | "woman" | "sunday" | "weekday" | "scaleId", ExtArgs["result"]["colaborator"]>
  export type ColaboratorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scale?: boolean | ScaleDefaultArgs<ExtArgs>
  }
  export type ColaboratorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scale?: boolean | ScaleDefaultArgs<ExtArgs>
  }
  export type ColaboratorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scale?: boolean | ScaleDefaultArgs<ExtArgs>
  }

  export type $ColaboratorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Colaborator"
    objects: {
      scale: Prisma.$ScalePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      turn: boolean
      woman: boolean
      sunday: Date
      weekday: number[]
      scaleId: number
    }, ExtArgs["result"]["colaborator"]>
    composites: {}
  }

  type ColaboratorGetPayload<S extends boolean | null | undefined | ColaboratorDefaultArgs> = $Result.GetResult<Prisma.$ColaboratorPayload, S>

  type ColaboratorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ColaboratorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ColaboratorCountAggregateInputType | true
    }

  export interface ColaboratorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Colaborator'], meta: { name: 'Colaborator' } }
    /**
     * Find zero or one Colaborator that matches the filter.
     * @param {ColaboratorFindUniqueArgs} args - Arguments to find a Colaborator
     * @example
     * // Get one Colaborator
     * const colaborator = await prisma.colaborator.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ColaboratorFindUniqueArgs>(args: SelectSubset<T, ColaboratorFindUniqueArgs<ExtArgs>>): Prisma__ColaboratorClient<$Result.GetResult<Prisma.$ColaboratorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Colaborator that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ColaboratorFindUniqueOrThrowArgs} args - Arguments to find a Colaborator
     * @example
     * // Get one Colaborator
     * const colaborator = await prisma.colaborator.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ColaboratorFindUniqueOrThrowArgs>(args: SelectSubset<T, ColaboratorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ColaboratorClient<$Result.GetResult<Prisma.$ColaboratorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Colaborator that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColaboratorFindFirstArgs} args - Arguments to find a Colaborator
     * @example
     * // Get one Colaborator
     * const colaborator = await prisma.colaborator.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ColaboratorFindFirstArgs>(args?: SelectSubset<T, ColaboratorFindFirstArgs<ExtArgs>>): Prisma__ColaboratorClient<$Result.GetResult<Prisma.$ColaboratorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Colaborator that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColaboratorFindFirstOrThrowArgs} args - Arguments to find a Colaborator
     * @example
     * // Get one Colaborator
     * const colaborator = await prisma.colaborator.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ColaboratorFindFirstOrThrowArgs>(args?: SelectSubset<T, ColaboratorFindFirstOrThrowArgs<ExtArgs>>): Prisma__ColaboratorClient<$Result.GetResult<Prisma.$ColaboratorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Colaborators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColaboratorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Colaborators
     * const colaborators = await prisma.colaborator.findMany()
     * 
     * // Get first 10 Colaborators
     * const colaborators = await prisma.colaborator.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const colaboratorWithIdOnly = await prisma.colaborator.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ColaboratorFindManyArgs>(args?: SelectSubset<T, ColaboratorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColaboratorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Colaborator.
     * @param {ColaboratorCreateArgs} args - Arguments to create a Colaborator.
     * @example
     * // Create one Colaborator
     * const Colaborator = await prisma.colaborator.create({
     *   data: {
     *     // ... data to create a Colaborator
     *   }
     * })
     * 
     */
    create<T extends ColaboratorCreateArgs>(args: SelectSubset<T, ColaboratorCreateArgs<ExtArgs>>): Prisma__ColaboratorClient<$Result.GetResult<Prisma.$ColaboratorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Colaborators.
     * @param {ColaboratorCreateManyArgs} args - Arguments to create many Colaborators.
     * @example
     * // Create many Colaborators
     * const colaborator = await prisma.colaborator.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ColaboratorCreateManyArgs>(args?: SelectSubset<T, ColaboratorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Colaborators and returns the data saved in the database.
     * @param {ColaboratorCreateManyAndReturnArgs} args - Arguments to create many Colaborators.
     * @example
     * // Create many Colaborators
     * const colaborator = await prisma.colaborator.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Colaborators and only return the `id`
     * const colaboratorWithIdOnly = await prisma.colaborator.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ColaboratorCreateManyAndReturnArgs>(args?: SelectSubset<T, ColaboratorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColaboratorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Colaborator.
     * @param {ColaboratorDeleteArgs} args - Arguments to delete one Colaborator.
     * @example
     * // Delete one Colaborator
     * const Colaborator = await prisma.colaborator.delete({
     *   where: {
     *     // ... filter to delete one Colaborator
     *   }
     * })
     * 
     */
    delete<T extends ColaboratorDeleteArgs>(args: SelectSubset<T, ColaboratorDeleteArgs<ExtArgs>>): Prisma__ColaboratorClient<$Result.GetResult<Prisma.$ColaboratorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Colaborator.
     * @param {ColaboratorUpdateArgs} args - Arguments to update one Colaborator.
     * @example
     * // Update one Colaborator
     * const colaborator = await prisma.colaborator.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ColaboratorUpdateArgs>(args: SelectSubset<T, ColaboratorUpdateArgs<ExtArgs>>): Prisma__ColaboratorClient<$Result.GetResult<Prisma.$ColaboratorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Colaborators.
     * @param {ColaboratorDeleteManyArgs} args - Arguments to filter Colaborators to delete.
     * @example
     * // Delete a few Colaborators
     * const { count } = await prisma.colaborator.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ColaboratorDeleteManyArgs>(args?: SelectSubset<T, ColaboratorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Colaborators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColaboratorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Colaborators
     * const colaborator = await prisma.colaborator.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ColaboratorUpdateManyArgs>(args: SelectSubset<T, ColaboratorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Colaborators and returns the data updated in the database.
     * @param {ColaboratorUpdateManyAndReturnArgs} args - Arguments to update many Colaborators.
     * @example
     * // Update many Colaborators
     * const colaborator = await prisma.colaborator.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Colaborators and only return the `id`
     * const colaboratorWithIdOnly = await prisma.colaborator.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ColaboratorUpdateManyAndReturnArgs>(args: SelectSubset<T, ColaboratorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColaboratorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Colaborator.
     * @param {ColaboratorUpsertArgs} args - Arguments to update or create a Colaborator.
     * @example
     * // Update or create a Colaborator
     * const colaborator = await prisma.colaborator.upsert({
     *   create: {
     *     // ... data to create a Colaborator
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Colaborator we want to update
     *   }
     * })
     */
    upsert<T extends ColaboratorUpsertArgs>(args: SelectSubset<T, ColaboratorUpsertArgs<ExtArgs>>): Prisma__ColaboratorClient<$Result.GetResult<Prisma.$ColaboratorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Colaborators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColaboratorCountArgs} args - Arguments to filter Colaborators to count.
     * @example
     * // Count the number of Colaborators
     * const count = await prisma.colaborator.count({
     *   where: {
     *     // ... the filter for the Colaborators we want to count
     *   }
     * })
    **/
    count<T extends ColaboratorCountArgs>(
      args?: Subset<T, ColaboratorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ColaboratorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Colaborator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColaboratorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ColaboratorAggregateArgs>(args: Subset<T, ColaboratorAggregateArgs>): Prisma.PrismaPromise<GetColaboratorAggregateType<T>>

    /**
     * Group by Colaborator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColaboratorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ColaboratorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ColaboratorGroupByArgs['orderBy'] }
        : { orderBy?: ColaboratorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ColaboratorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetColaboratorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Colaborator model
   */
  readonly fields: ColaboratorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Colaborator.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ColaboratorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    scale<T extends ScaleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScaleDefaultArgs<ExtArgs>>): Prisma__ScaleClient<$Result.GetResult<Prisma.$ScalePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Colaborator model
   */
  interface ColaboratorFieldRefs {
    readonly id: FieldRef<"Colaborator", 'Int'>
    readonly name: FieldRef<"Colaborator", 'String'>
    readonly turn: FieldRef<"Colaborator", 'Boolean'>
    readonly woman: FieldRef<"Colaborator", 'Boolean'>
    readonly sunday: FieldRef<"Colaborator", 'DateTime'>
    readonly weekday: FieldRef<"Colaborator", 'Int[]'>
    readonly scaleId: FieldRef<"Colaborator", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Colaborator findUnique
   */
  export type ColaboratorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Colaborator
     */
    select?: ColaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Colaborator
     */
    omit?: ColaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColaboratorInclude<ExtArgs> | null
    /**
     * Filter, which Colaborator to fetch.
     */
    where: ColaboratorWhereUniqueInput
  }

  /**
   * Colaborator findUniqueOrThrow
   */
  export type ColaboratorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Colaborator
     */
    select?: ColaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Colaborator
     */
    omit?: ColaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColaboratorInclude<ExtArgs> | null
    /**
     * Filter, which Colaborator to fetch.
     */
    where: ColaboratorWhereUniqueInput
  }

  /**
   * Colaborator findFirst
   */
  export type ColaboratorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Colaborator
     */
    select?: ColaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Colaborator
     */
    omit?: ColaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColaboratorInclude<ExtArgs> | null
    /**
     * Filter, which Colaborator to fetch.
     */
    where?: ColaboratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colaborators to fetch.
     */
    orderBy?: ColaboratorOrderByWithRelationInput | ColaboratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Colaborators.
     */
    cursor?: ColaboratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colaborators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colaborators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Colaborators.
     */
    distinct?: ColaboratorScalarFieldEnum | ColaboratorScalarFieldEnum[]
  }

  /**
   * Colaborator findFirstOrThrow
   */
  export type ColaboratorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Colaborator
     */
    select?: ColaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Colaborator
     */
    omit?: ColaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColaboratorInclude<ExtArgs> | null
    /**
     * Filter, which Colaborator to fetch.
     */
    where?: ColaboratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colaborators to fetch.
     */
    orderBy?: ColaboratorOrderByWithRelationInput | ColaboratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Colaborators.
     */
    cursor?: ColaboratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colaborators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colaborators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Colaborators.
     */
    distinct?: ColaboratorScalarFieldEnum | ColaboratorScalarFieldEnum[]
  }

  /**
   * Colaborator findMany
   */
  export type ColaboratorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Colaborator
     */
    select?: ColaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Colaborator
     */
    omit?: ColaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColaboratorInclude<ExtArgs> | null
    /**
     * Filter, which Colaborators to fetch.
     */
    where?: ColaboratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colaborators to fetch.
     */
    orderBy?: ColaboratorOrderByWithRelationInput | ColaboratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Colaborators.
     */
    cursor?: ColaboratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colaborators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colaborators.
     */
    skip?: number
    distinct?: ColaboratorScalarFieldEnum | ColaboratorScalarFieldEnum[]
  }

  /**
   * Colaborator create
   */
  export type ColaboratorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Colaborator
     */
    select?: ColaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Colaborator
     */
    omit?: ColaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColaboratorInclude<ExtArgs> | null
    /**
     * The data needed to create a Colaborator.
     */
    data: XOR<ColaboratorCreateInput, ColaboratorUncheckedCreateInput>
  }

  /**
   * Colaborator createMany
   */
  export type ColaboratorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Colaborators.
     */
    data: ColaboratorCreateManyInput | ColaboratorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Colaborator createManyAndReturn
   */
  export type ColaboratorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Colaborator
     */
    select?: ColaboratorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Colaborator
     */
    omit?: ColaboratorOmit<ExtArgs> | null
    /**
     * The data used to create many Colaborators.
     */
    data: ColaboratorCreateManyInput | ColaboratorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColaboratorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Colaborator update
   */
  export type ColaboratorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Colaborator
     */
    select?: ColaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Colaborator
     */
    omit?: ColaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColaboratorInclude<ExtArgs> | null
    /**
     * The data needed to update a Colaborator.
     */
    data: XOR<ColaboratorUpdateInput, ColaboratorUncheckedUpdateInput>
    /**
     * Choose, which Colaborator to update.
     */
    where: ColaboratorWhereUniqueInput
  }

  /**
   * Colaborator updateMany
   */
  export type ColaboratorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Colaborators.
     */
    data: XOR<ColaboratorUpdateManyMutationInput, ColaboratorUncheckedUpdateManyInput>
    /**
     * Filter which Colaborators to update
     */
    where?: ColaboratorWhereInput
    /**
     * Limit how many Colaborators to update.
     */
    limit?: number
  }

  /**
   * Colaborator updateManyAndReturn
   */
  export type ColaboratorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Colaborator
     */
    select?: ColaboratorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Colaborator
     */
    omit?: ColaboratorOmit<ExtArgs> | null
    /**
     * The data used to update Colaborators.
     */
    data: XOR<ColaboratorUpdateManyMutationInput, ColaboratorUncheckedUpdateManyInput>
    /**
     * Filter which Colaborators to update
     */
    where?: ColaboratorWhereInput
    /**
     * Limit how many Colaborators to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColaboratorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Colaborator upsert
   */
  export type ColaboratorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Colaborator
     */
    select?: ColaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Colaborator
     */
    omit?: ColaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColaboratorInclude<ExtArgs> | null
    /**
     * The filter to search for the Colaborator to update in case it exists.
     */
    where: ColaboratorWhereUniqueInput
    /**
     * In case the Colaborator found by the `where` argument doesn't exist, create a new Colaborator with this data.
     */
    create: XOR<ColaboratorCreateInput, ColaboratorUncheckedCreateInput>
    /**
     * In case the Colaborator was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ColaboratorUpdateInput, ColaboratorUncheckedUpdateInput>
  }

  /**
   * Colaborator delete
   */
  export type ColaboratorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Colaborator
     */
    select?: ColaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Colaborator
     */
    omit?: ColaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColaboratorInclude<ExtArgs> | null
    /**
     * Filter which Colaborator to delete.
     */
    where: ColaboratorWhereUniqueInput
  }

  /**
   * Colaborator deleteMany
   */
  export type ColaboratorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Colaborators to delete
     */
    where?: ColaboratorWhereInput
    /**
     * Limit how many Colaborators to delete.
     */
    limit?: number
  }

  /**
   * Colaborator without action
   */
  export type ColaboratorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Colaborator
     */
    select?: ColaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Colaborator
     */
    omit?: ColaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColaboratorInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ScaleScalarFieldEnum: {
    id: 'id',
    user: 'user',
    title: 'title',
    month: 'month',
    year: 'year',
    periodScale: 'periodScale'
  };

  export type ScaleScalarFieldEnum = (typeof ScaleScalarFieldEnum)[keyof typeof ScaleScalarFieldEnum]


  export const ColaboratorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    turn: 'turn',
    woman: 'woman',
    sunday: 'sunday',
    weekday: 'weekday',
    scaleId: 'scaleId'
  };

  export type ColaboratorScalarFieldEnum = (typeof ColaboratorScalarFieldEnum)[keyof typeof ColaboratorScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ScaleWhereInput = {
    AND?: ScaleWhereInput | ScaleWhereInput[]
    OR?: ScaleWhereInput[]
    NOT?: ScaleWhereInput | ScaleWhereInput[]
    id?: IntFilter<"Scale"> | number
    user?: StringFilter<"Scale"> | string
    title?: StringFilter<"Scale"> | string
    month?: StringFilter<"Scale"> | string
    year?: StringFilter<"Scale"> | string
    periodScale?: StringFilter<"Scale"> | string
    colaborators?: ColaboratorListRelationFilter
  }

  export type ScaleOrderByWithRelationInput = {
    id?: SortOrder
    user?: SortOrder
    title?: SortOrder
    month?: SortOrder
    year?: SortOrder
    periodScale?: SortOrder
    colaborators?: ColaboratorOrderByRelationAggregateInput
  }

  export type ScaleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ScaleWhereInput | ScaleWhereInput[]
    OR?: ScaleWhereInput[]
    NOT?: ScaleWhereInput | ScaleWhereInput[]
    user?: StringFilter<"Scale"> | string
    title?: StringFilter<"Scale"> | string
    month?: StringFilter<"Scale"> | string
    year?: StringFilter<"Scale"> | string
    periodScale?: StringFilter<"Scale"> | string
    colaborators?: ColaboratorListRelationFilter
  }, "id">

  export type ScaleOrderByWithAggregationInput = {
    id?: SortOrder
    user?: SortOrder
    title?: SortOrder
    month?: SortOrder
    year?: SortOrder
    periodScale?: SortOrder
    _count?: ScaleCountOrderByAggregateInput
    _avg?: ScaleAvgOrderByAggregateInput
    _max?: ScaleMaxOrderByAggregateInput
    _min?: ScaleMinOrderByAggregateInput
    _sum?: ScaleSumOrderByAggregateInput
  }

  export type ScaleScalarWhereWithAggregatesInput = {
    AND?: ScaleScalarWhereWithAggregatesInput | ScaleScalarWhereWithAggregatesInput[]
    OR?: ScaleScalarWhereWithAggregatesInput[]
    NOT?: ScaleScalarWhereWithAggregatesInput | ScaleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Scale"> | number
    user?: StringWithAggregatesFilter<"Scale"> | string
    title?: StringWithAggregatesFilter<"Scale"> | string
    month?: StringWithAggregatesFilter<"Scale"> | string
    year?: StringWithAggregatesFilter<"Scale"> | string
    periodScale?: StringWithAggregatesFilter<"Scale"> | string
  }

  export type ColaboratorWhereInput = {
    AND?: ColaboratorWhereInput | ColaboratorWhereInput[]
    OR?: ColaboratorWhereInput[]
    NOT?: ColaboratorWhereInput | ColaboratorWhereInput[]
    id?: IntFilter<"Colaborator"> | number
    name?: StringFilter<"Colaborator"> | string
    turn?: BoolFilter<"Colaborator"> | boolean
    woman?: BoolFilter<"Colaborator"> | boolean
    sunday?: DateTimeFilter<"Colaborator"> | Date | string
    weekday?: IntNullableListFilter<"Colaborator">
    scaleId?: IntFilter<"Colaborator"> | number
    scale?: XOR<ScaleScalarRelationFilter, ScaleWhereInput>
  }

  export type ColaboratorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    turn?: SortOrder
    woman?: SortOrder
    sunday?: SortOrder
    weekday?: SortOrder
    scaleId?: SortOrder
    scale?: ScaleOrderByWithRelationInput
  }

  export type ColaboratorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ColaboratorWhereInput | ColaboratorWhereInput[]
    OR?: ColaboratorWhereInput[]
    NOT?: ColaboratorWhereInput | ColaboratorWhereInput[]
    name?: StringFilter<"Colaborator"> | string
    turn?: BoolFilter<"Colaborator"> | boolean
    woman?: BoolFilter<"Colaborator"> | boolean
    sunday?: DateTimeFilter<"Colaborator"> | Date | string
    weekday?: IntNullableListFilter<"Colaborator">
    scaleId?: IntFilter<"Colaborator"> | number
    scale?: XOR<ScaleScalarRelationFilter, ScaleWhereInput>
  }, "id">

  export type ColaboratorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    turn?: SortOrder
    woman?: SortOrder
    sunday?: SortOrder
    weekday?: SortOrder
    scaleId?: SortOrder
    _count?: ColaboratorCountOrderByAggregateInput
    _avg?: ColaboratorAvgOrderByAggregateInput
    _max?: ColaboratorMaxOrderByAggregateInput
    _min?: ColaboratorMinOrderByAggregateInput
    _sum?: ColaboratorSumOrderByAggregateInput
  }

  export type ColaboratorScalarWhereWithAggregatesInput = {
    AND?: ColaboratorScalarWhereWithAggregatesInput | ColaboratorScalarWhereWithAggregatesInput[]
    OR?: ColaboratorScalarWhereWithAggregatesInput[]
    NOT?: ColaboratorScalarWhereWithAggregatesInput | ColaboratorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Colaborator"> | number
    name?: StringWithAggregatesFilter<"Colaborator"> | string
    turn?: BoolWithAggregatesFilter<"Colaborator"> | boolean
    woman?: BoolWithAggregatesFilter<"Colaborator"> | boolean
    sunday?: DateTimeWithAggregatesFilter<"Colaborator"> | Date | string
    weekday?: IntNullableListFilter<"Colaborator">
    scaleId?: IntWithAggregatesFilter<"Colaborator"> | number
  }

  export type ScaleCreateInput = {
    user: string
    title: string
    month: string
    year: string
    periodScale: string
    colaborators?: ColaboratorCreateNestedManyWithoutScaleInput
  }

  export type ScaleUncheckedCreateInput = {
    id?: number
    user: string
    title: string
    month: string
    year: string
    periodScale: string
    colaborators?: ColaboratorUncheckedCreateNestedManyWithoutScaleInput
  }

  export type ScaleUpdateInput = {
    user?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    periodScale?: StringFieldUpdateOperationsInput | string
    colaborators?: ColaboratorUpdateManyWithoutScaleNestedInput
  }

  export type ScaleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    periodScale?: StringFieldUpdateOperationsInput | string
    colaborators?: ColaboratorUncheckedUpdateManyWithoutScaleNestedInput
  }

  export type ScaleCreateManyInput = {
    id?: number
    user: string
    title: string
    month: string
    year: string
    periodScale: string
  }

  export type ScaleUpdateManyMutationInput = {
    user?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    periodScale?: StringFieldUpdateOperationsInput | string
  }

  export type ScaleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    periodScale?: StringFieldUpdateOperationsInput | string
  }

  export type ColaboratorCreateInput = {
    name: string
    turn: boolean
    woman: boolean
    sunday?: Date | string
    weekday?: ColaboratorCreateweekdayInput | number[]
    scale: ScaleCreateNestedOneWithoutColaboratorsInput
  }

  export type ColaboratorUncheckedCreateInput = {
    id?: number
    name: string
    turn: boolean
    woman: boolean
    sunday?: Date | string
    weekday?: ColaboratorCreateweekdayInput | number[]
    scaleId: number
  }

  export type ColaboratorUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    turn?: BoolFieldUpdateOperationsInput | boolean
    woman?: BoolFieldUpdateOperationsInput | boolean
    sunday?: DateTimeFieldUpdateOperationsInput | Date | string
    weekday?: ColaboratorUpdateweekdayInput | number[]
    scale?: ScaleUpdateOneRequiredWithoutColaboratorsNestedInput
  }

  export type ColaboratorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    turn?: BoolFieldUpdateOperationsInput | boolean
    woman?: BoolFieldUpdateOperationsInput | boolean
    sunday?: DateTimeFieldUpdateOperationsInput | Date | string
    weekday?: ColaboratorUpdateweekdayInput | number[]
    scaleId?: IntFieldUpdateOperationsInput | number
  }

  export type ColaboratorCreateManyInput = {
    id?: number
    name: string
    turn: boolean
    woman: boolean
    sunday?: Date | string
    weekday?: ColaboratorCreateweekdayInput | number[]
    scaleId: number
  }

  export type ColaboratorUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    turn?: BoolFieldUpdateOperationsInput | boolean
    woman?: BoolFieldUpdateOperationsInput | boolean
    sunday?: DateTimeFieldUpdateOperationsInput | Date | string
    weekday?: ColaboratorUpdateweekdayInput | number[]
  }

  export type ColaboratorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    turn?: BoolFieldUpdateOperationsInput | boolean
    woman?: BoolFieldUpdateOperationsInput | boolean
    sunday?: DateTimeFieldUpdateOperationsInput | Date | string
    weekday?: ColaboratorUpdateweekdayInput | number[]
    scaleId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ColaboratorListRelationFilter = {
    every?: ColaboratorWhereInput
    some?: ColaboratorWhereInput
    none?: ColaboratorWhereInput
  }

  export type ColaboratorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScaleCountOrderByAggregateInput = {
    id?: SortOrder
    user?: SortOrder
    title?: SortOrder
    month?: SortOrder
    year?: SortOrder
    periodScale?: SortOrder
  }

  export type ScaleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ScaleMaxOrderByAggregateInput = {
    id?: SortOrder
    user?: SortOrder
    title?: SortOrder
    month?: SortOrder
    year?: SortOrder
    periodScale?: SortOrder
  }

  export type ScaleMinOrderByAggregateInput = {
    id?: SortOrder
    user?: SortOrder
    title?: SortOrder
    month?: SortOrder
    year?: SortOrder
    periodScale?: SortOrder
  }

  export type ScaleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ScaleScalarRelationFilter = {
    is?: ScaleWhereInput
    isNot?: ScaleWhereInput
  }

  export type ColaboratorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    turn?: SortOrder
    woman?: SortOrder
    sunday?: SortOrder
    weekday?: SortOrder
    scaleId?: SortOrder
  }

  export type ColaboratorAvgOrderByAggregateInput = {
    id?: SortOrder
    weekday?: SortOrder
    scaleId?: SortOrder
  }

  export type ColaboratorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    turn?: SortOrder
    woman?: SortOrder
    sunday?: SortOrder
    scaleId?: SortOrder
  }

  export type ColaboratorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    turn?: SortOrder
    woman?: SortOrder
    sunday?: SortOrder
    scaleId?: SortOrder
  }

  export type ColaboratorSumOrderByAggregateInput = {
    id?: SortOrder
    weekday?: SortOrder
    scaleId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ColaboratorCreateNestedManyWithoutScaleInput = {
    create?: XOR<ColaboratorCreateWithoutScaleInput, ColaboratorUncheckedCreateWithoutScaleInput> | ColaboratorCreateWithoutScaleInput[] | ColaboratorUncheckedCreateWithoutScaleInput[]
    connectOrCreate?: ColaboratorCreateOrConnectWithoutScaleInput | ColaboratorCreateOrConnectWithoutScaleInput[]
    createMany?: ColaboratorCreateManyScaleInputEnvelope
    connect?: ColaboratorWhereUniqueInput | ColaboratorWhereUniqueInput[]
  }

  export type ColaboratorUncheckedCreateNestedManyWithoutScaleInput = {
    create?: XOR<ColaboratorCreateWithoutScaleInput, ColaboratorUncheckedCreateWithoutScaleInput> | ColaboratorCreateWithoutScaleInput[] | ColaboratorUncheckedCreateWithoutScaleInput[]
    connectOrCreate?: ColaboratorCreateOrConnectWithoutScaleInput | ColaboratorCreateOrConnectWithoutScaleInput[]
    createMany?: ColaboratorCreateManyScaleInputEnvelope
    connect?: ColaboratorWhereUniqueInput | ColaboratorWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ColaboratorUpdateManyWithoutScaleNestedInput = {
    create?: XOR<ColaboratorCreateWithoutScaleInput, ColaboratorUncheckedCreateWithoutScaleInput> | ColaboratorCreateWithoutScaleInput[] | ColaboratorUncheckedCreateWithoutScaleInput[]
    connectOrCreate?: ColaboratorCreateOrConnectWithoutScaleInput | ColaboratorCreateOrConnectWithoutScaleInput[]
    upsert?: ColaboratorUpsertWithWhereUniqueWithoutScaleInput | ColaboratorUpsertWithWhereUniqueWithoutScaleInput[]
    createMany?: ColaboratorCreateManyScaleInputEnvelope
    set?: ColaboratorWhereUniqueInput | ColaboratorWhereUniqueInput[]
    disconnect?: ColaboratorWhereUniqueInput | ColaboratorWhereUniqueInput[]
    delete?: ColaboratorWhereUniqueInput | ColaboratorWhereUniqueInput[]
    connect?: ColaboratorWhereUniqueInput | ColaboratorWhereUniqueInput[]
    update?: ColaboratorUpdateWithWhereUniqueWithoutScaleInput | ColaboratorUpdateWithWhereUniqueWithoutScaleInput[]
    updateMany?: ColaboratorUpdateManyWithWhereWithoutScaleInput | ColaboratorUpdateManyWithWhereWithoutScaleInput[]
    deleteMany?: ColaboratorScalarWhereInput | ColaboratorScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ColaboratorUncheckedUpdateManyWithoutScaleNestedInput = {
    create?: XOR<ColaboratorCreateWithoutScaleInput, ColaboratorUncheckedCreateWithoutScaleInput> | ColaboratorCreateWithoutScaleInput[] | ColaboratorUncheckedCreateWithoutScaleInput[]
    connectOrCreate?: ColaboratorCreateOrConnectWithoutScaleInput | ColaboratorCreateOrConnectWithoutScaleInput[]
    upsert?: ColaboratorUpsertWithWhereUniqueWithoutScaleInput | ColaboratorUpsertWithWhereUniqueWithoutScaleInput[]
    createMany?: ColaboratorCreateManyScaleInputEnvelope
    set?: ColaboratorWhereUniqueInput | ColaboratorWhereUniqueInput[]
    disconnect?: ColaboratorWhereUniqueInput | ColaboratorWhereUniqueInput[]
    delete?: ColaboratorWhereUniqueInput | ColaboratorWhereUniqueInput[]
    connect?: ColaboratorWhereUniqueInput | ColaboratorWhereUniqueInput[]
    update?: ColaboratorUpdateWithWhereUniqueWithoutScaleInput | ColaboratorUpdateWithWhereUniqueWithoutScaleInput[]
    updateMany?: ColaboratorUpdateManyWithWhereWithoutScaleInput | ColaboratorUpdateManyWithWhereWithoutScaleInput[]
    deleteMany?: ColaboratorScalarWhereInput | ColaboratorScalarWhereInput[]
  }

  export type ColaboratorCreateweekdayInput = {
    set: number[]
  }

  export type ScaleCreateNestedOneWithoutColaboratorsInput = {
    create?: XOR<ScaleCreateWithoutColaboratorsInput, ScaleUncheckedCreateWithoutColaboratorsInput>
    connectOrCreate?: ScaleCreateOrConnectWithoutColaboratorsInput
    connect?: ScaleWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ColaboratorUpdateweekdayInput = {
    set?: number[]
    push?: number | number[]
  }

  export type ScaleUpdateOneRequiredWithoutColaboratorsNestedInput = {
    create?: XOR<ScaleCreateWithoutColaboratorsInput, ScaleUncheckedCreateWithoutColaboratorsInput>
    connectOrCreate?: ScaleCreateOrConnectWithoutColaboratorsInput
    upsert?: ScaleUpsertWithoutColaboratorsInput
    connect?: ScaleWhereUniqueInput
    update?: XOR<XOR<ScaleUpdateToOneWithWhereWithoutColaboratorsInput, ScaleUpdateWithoutColaboratorsInput>, ScaleUncheckedUpdateWithoutColaboratorsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ColaboratorCreateWithoutScaleInput = {
    name: string
    turn: boolean
    woman: boolean
    sunday?: Date | string
    weekday?: ColaboratorCreateweekdayInput | number[]
  }

  export type ColaboratorUncheckedCreateWithoutScaleInput = {
    id?: number
    name: string
    turn: boolean
    woman: boolean
    sunday?: Date | string
    weekday?: ColaboratorCreateweekdayInput | number[]
  }

  export type ColaboratorCreateOrConnectWithoutScaleInput = {
    where: ColaboratorWhereUniqueInput
    create: XOR<ColaboratorCreateWithoutScaleInput, ColaboratorUncheckedCreateWithoutScaleInput>
  }

  export type ColaboratorCreateManyScaleInputEnvelope = {
    data: ColaboratorCreateManyScaleInput | ColaboratorCreateManyScaleInput[]
    skipDuplicates?: boolean
  }

  export type ColaboratorUpsertWithWhereUniqueWithoutScaleInput = {
    where: ColaboratorWhereUniqueInput
    update: XOR<ColaboratorUpdateWithoutScaleInput, ColaboratorUncheckedUpdateWithoutScaleInput>
    create: XOR<ColaboratorCreateWithoutScaleInput, ColaboratorUncheckedCreateWithoutScaleInput>
  }

  export type ColaboratorUpdateWithWhereUniqueWithoutScaleInput = {
    where: ColaboratorWhereUniqueInput
    data: XOR<ColaboratorUpdateWithoutScaleInput, ColaboratorUncheckedUpdateWithoutScaleInput>
  }

  export type ColaboratorUpdateManyWithWhereWithoutScaleInput = {
    where: ColaboratorScalarWhereInput
    data: XOR<ColaboratorUpdateManyMutationInput, ColaboratorUncheckedUpdateManyWithoutScaleInput>
  }

  export type ColaboratorScalarWhereInput = {
    AND?: ColaboratorScalarWhereInput | ColaboratorScalarWhereInput[]
    OR?: ColaboratorScalarWhereInput[]
    NOT?: ColaboratorScalarWhereInput | ColaboratorScalarWhereInput[]
    id?: IntFilter<"Colaborator"> | number
    name?: StringFilter<"Colaborator"> | string
    turn?: BoolFilter<"Colaborator"> | boolean
    woman?: BoolFilter<"Colaborator"> | boolean
    sunday?: DateTimeFilter<"Colaborator"> | Date | string
    weekday?: IntNullableListFilter<"Colaborator">
    scaleId?: IntFilter<"Colaborator"> | number
  }

  export type ScaleCreateWithoutColaboratorsInput = {
    user: string
    title: string
    month: string
    year: string
    periodScale: string
  }

  export type ScaleUncheckedCreateWithoutColaboratorsInput = {
    id?: number
    user: string
    title: string
    month: string
    year: string
    periodScale: string
  }

  export type ScaleCreateOrConnectWithoutColaboratorsInput = {
    where: ScaleWhereUniqueInput
    create: XOR<ScaleCreateWithoutColaboratorsInput, ScaleUncheckedCreateWithoutColaboratorsInput>
  }

  export type ScaleUpsertWithoutColaboratorsInput = {
    update: XOR<ScaleUpdateWithoutColaboratorsInput, ScaleUncheckedUpdateWithoutColaboratorsInput>
    create: XOR<ScaleCreateWithoutColaboratorsInput, ScaleUncheckedCreateWithoutColaboratorsInput>
    where?: ScaleWhereInput
  }

  export type ScaleUpdateToOneWithWhereWithoutColaboratorsInput = {
    where?: ScaleWhereInput
    data: XOR<ScaleUpdateWithoutColaboratorsInput, ScaleUncheckedUpdateWithoutColaboratorsInput>
  }

  export type ScaleUpdateWithoutColaboratorsInput = {
    user?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    periodScale?: StringFieldUpdateOperationsInput | string
  }

  export type ScaleUncheckedUpdateWithoutColaboratorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    periodScale?: StringFieldUpdateOperationsInput | string
  }

  export type ColaboratorCreateManyScaleInput = {
    id?: number
    name: string
    turn: boolean
    woman: boolean
    sunday?: Date | string
    weekday?: ColaboratorCreateweekdayInput | number[]
  }

  export type ColaboratorUpdateWithoutScaleInput = {
    name?: StringFieldUpdateOperationsInput | string
    turn?: BoolFieldUpdateOperationsInput | boolean
    woman?: BoolFieldUpdateOperationsInput | boolean
    sunday?: DateTimeFieldUpdateOperationsInput | Date | string
    weekday?: ColaboratorUpdateweekdayInput | number[]
  }

  export type ColaboratorUncheckedUpdateWithoutScaleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    turn?: BoolFieldUpdateOperationsInput | boolean
    woman?: BoolFieldUpdateOperationsInput | boolean
    sunday?: DateTimeFieldUpdateOperationsInput | Date | string
    weekday?: ColaboratorUpdateweekdayInput | number[]
  }

  export type ColaboratorUncheckedUpdateManyWithoutScaleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    turn?: BoolFieldUpdateOperationsInput | boolean
    woman?: BoolFieldUpdateOperationsInput | boolean
    sunday?: DateTimeFieldUpdateOperationsInput | Date | string
    weekday?: ColaboratorUpdateweekdayInput | number[]
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}