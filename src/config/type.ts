/*
 * Copyright (c) 2022.
 * Author Peter Placzek (tada5hi)
 * For the full copyright and license information,
 * view the LICENSE file that was distributed with this source code.
 */

import { Options } from 'amqplib';
import { ExchangeOptions } from '../exchange';
import { ConsumeOptions, PublishOptions } from '../type';

export type Config = {
    alias: string,
    connection: Options.Connect | string,
    exchange: ExchangeOptions,
    publish: PublishOptions,
    consume: ConsumeOptions
};

export type ConfigInput = Partial<Exclude<Config, 'connection'>> &
Pick<Config, 'connection'>;
