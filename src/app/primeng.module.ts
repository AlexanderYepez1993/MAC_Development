import { NgModule } from "@angular/core";

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { PasswordModule } from 'primeng/password';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SidebarModule } from 'primeng/sidebar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
    exports: [
        ButtonModule,
        CardModule,
        InputTextModule,
        MenubarModule,
        MessageModule,
        MessagesModule,
        PasswordModule,
        ProgressSpinnerModule,
        SidebarModule,
        SplitButtonModule,
        ToolbarModule
    ]
})

export class PrimeNGModule {}