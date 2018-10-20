import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub478Component} from "./stub478.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub478Component
        }])
    ],
    declarations: [
        Stub478Component
    ]
})
export class Stub478Module {

}
