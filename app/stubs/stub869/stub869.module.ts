import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub869Component} from "./stub869.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub869Component
        }])
    ],
    declarations: [
        Stub869Component
    ]
})
export class Stub869Module {

}
