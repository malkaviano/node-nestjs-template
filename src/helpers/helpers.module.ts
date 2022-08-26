import { Module, Global } from '@nestjs/common';

import { CustomLoggerHelper } from '@root/helpers/custom-logger.helper';
import { DateTimeHelper } from '@root/helpers/date-time.helper';
import { ConfigValuesHelper } from '@root/helpers/config-values.helper';

@Global()
@Module({
  providers: [DateTimeHelper, CustomLoggerHelper, ConfigValuesHelper],
  exports: [DateTimeHelper, CustomLoggerHelper, ConfigValuesHelper],
})
export class HelpersModule {}
