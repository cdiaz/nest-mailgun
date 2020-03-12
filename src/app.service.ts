import { Injectable, Inject, ConflictException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {

  constructor(
    @Inject('mailgun') private readonly mg,
    private readonly configService: ConfigService
  ) { }

  async sendMail(email) {
    const data = {
      from: `Mailgun Sandbox <postmaster@${this.configService.get('MAILGUN_DOMAIN')}>`,
      to: email,
      subject: "Hello",
      text: "Testing some Mailgun awesomness!"
    };
    return await this.mg.messages().send(data)
      .then(result => {
        return result;
      })
      .catch(err => {
        throw new ConflictException(err.toString());
      })
  }

}