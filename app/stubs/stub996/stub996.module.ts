import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub996Component} from "./stub996.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub996Component
        }])
    ],
    declarations: [
        Stub996Component
    ]
})
export class Stub996Module {

}
