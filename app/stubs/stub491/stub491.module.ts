import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub491Component} from "./stub491.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub491Component
        }])
    ],
    declarations: [
        Stub491Component
    ]
})
export class Stub491Module {

}
