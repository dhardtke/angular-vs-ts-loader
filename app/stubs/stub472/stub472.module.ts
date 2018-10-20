import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub472Component} from "./stub472.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub472Component
        }])
    ],
    declarations: [
        Stub472Component
    ]
})
export class Stub472Module {

}
