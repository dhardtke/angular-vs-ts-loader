import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub610Component} from "./stub610.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub610Component
        }])
    ],
    declarations: [
        Stub610Component
    ]
})
export class Stub610Module {

}
