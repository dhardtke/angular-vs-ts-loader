import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub767Component} from "./stub767.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub767Component
        }])
    ],
    declarations: [
        Stub767Component
    ]
})
export class Stub767Module {

}
