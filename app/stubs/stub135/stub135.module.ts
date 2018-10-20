import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub135Component} from "./stub135.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub135Component
        }])
    ],
    declarations: [
        Stub135Component
    ]
})
export class Stub135Module {

}
