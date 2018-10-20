import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub902Component} from "./stub902.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub902Component
        }])
    ],
    declarations: [
        Stub902Component
    ]
})
export class Stub902Module {

}
